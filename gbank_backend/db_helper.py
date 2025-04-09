from google.cloud import firestore
from flask import make_response, jsonify
import google.auth
import os


def get_ds_client():
    creds, project_id =  google.auth.default()
    client = firestore.Client(project=project_id, database="gbank")
    return client

def check_user(email: str):
    creds, project_id =  google.auth.default()
    try:
        client = get_ds_client()
        collection_ref = client.collection('users')
        query = collection_ref.where(field_path='email', op_string="==", value=email)
        docs = query.stream()
        results = [doc.to_dict() for doc in docs]
        print(len(results), results)
        if len(results) > 0:
            results[0]["creds"] = creds.token
            response = make_response(jsonify(results))
            response.status_code = 200
            return response            
        else:
            response = make_response("No user found")
            response.status_code = 404
            return response
            
    except Exception as e:
        print(f"Error getting documents by field: {e}")
        response = make_response(e)
        response.status_code = 500
        return response


def add_new_user(data: str):
    
    try:
        print(str(data))
        client = get_ds_client()
        collection_ref = client.collection('users')
        id = collection_ref.add(data)
        response = make_response(f'user inserted as {id}')
        response.status_code = 201

    except Exception as e:
        print(e)
        response = make_response(f'Exception {e} caused which inserting data {data}')
        response.status_code = 500
    
    return response