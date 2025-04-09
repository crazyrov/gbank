import './UserInformationForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './userSlice';
import { useEffect, useState } from 'react';


const UserInformationForm = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const url = "http://localhost:5000";
    const handleFormsubmit = (data) => {
        data.preventDefault();
        const account_number = Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000;
        const balance = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
        const body = {
            name: data.target.name.value,
            account_number: account_number,
            address: data.target.address.value,
            email: data.target.email.value,
            phone: data.target.phone.value,
            balance: balance
        }
        fetch(url + "/new_user", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((data) => {
            if (!data.ok) {
                console.log("Updating user failed : ", data);
                dispatch(login({
                    name: user.name, email: user.email, token: '', image: user.image, existing_user: false
                }));
            } else {
                dispatch(login({
                    name: user.name, email: user.email, token: '', image: user.image, existing_user: true
                }));
            }
        });
        console.log('Form data :', data);

    }
    return (

        <div class="container">
            <div className='card'>
                <div className='class-header'>
                    <h1>Update your Profile</h1>
                </div>
                <div className='class-body'>
                    <form id="myForm" onSubmit={handleFormsubmit} >
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" value={user.name} disabled />

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" value={user.email} disabled />

                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phoneNumber" pattern="(\+?\d{10,15}|\d{3}-\d{3}-\d{4})" placeholder="+1234567890 / 123-456-7890" required />

                        <label for="address">Address:</label>
                        <textarea id="address" name="address" rows="4" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );

}

const style = {

}

export default UserInformationForm