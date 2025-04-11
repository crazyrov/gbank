// LoginPage.js
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import { login } from './userSlice';
import { useDispatch } from 'react-redux';
import './Login.css';
import gbank_demo_logo from '../public/gbank_demo_logo.png';
import page_loader from '../public/page_loader.png';


const LoginPage = () => {
    const url = "https://gbank-backend-15016664665.asia-south1.run.app";
    // const url = "http://127.0.0.1:8080";
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [triggerEffect, setTriggerEffect] = useState(null);
    const [showLoader, setShowLoader] = useState(false);

    const handleLogin = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        localStorage.setItem('token', credentialResponse.credential);
        setTriggerEffect({
            given_name: decoded.given_name,
            email: decoded.email,
            picture: decoded.picture,
            token: credentialResponse.credential
        });
    };

    useEffect(() => {
        console.log("run once", triggerEffect);
        if (localStorage.getItem('token')) {
            const decoded = jwtDecode(localStorage.getItem('token'));
            setTriggerEffect({
                given_name: decoded.given_name,
                email: decoded.email,
                picture: decoded.picture,
                token: localStorage.getItem('token')
            });
        }
    }, []);

    useEffect(() => {
        if (triggerEffect) {
            setShowLoader(true);
            console.log("user creds", showLoader);
            fetch(url + "/check_user?user=" + triggerEffect.email, { headers: { 'Authorization': triggerEffect.token } })
                .then((response) => {

                    if (response.status === 200 || response === 201) {
                        response.json().then((body) => {
                            const payload = {
                                name: triggerEffect.given_name,
                                email: triggerEffect.email,
                                token: triggerEffect.token,
                                image: triggerEffect.picture,
                                existing_user: true,
                                account_number: body[0].account_number,
                                balance: body[0].balance,
                                address: body[0].address,
                                phone: body[0].phone
                            }
                            console.log("Updating the payload : ", payload);
                            dispatch(login(payload));
                        });

                    } else {
                        const payload = {
                            name: triggerEffect.given_name,
                            email: triggerEffect.email,
                            token: '',
                            image: triggerEffect.picture,
                            existing_user: false
                        }
                        dispatch(login(payload));
                    }
                    setTriggerEffect(null);
                    setShowLoader(false);

                }
                )
        }
    }, [triggerEffect]);

    var view = (<></>)
    console.log("This is the showLoaded", showLoader);
    if (showLoader) {
        view = (
            <>
                <div className="page_loader_container">
                    <p style={{ padding: '10px' }}>Logging you in....</p>

                    <img src={page_loader} className="rotating-image" alt="Rotating Image" />
                </div>
            </>
        );
    } else if (!localStorage.getItem('token')) {
        view = (
            // <div className='container'>
            <div className='card'>
                <img src={gbank_demo_logo}></img>
                <p className='name'>GBANK</p>
                <p>Where Banking meets technology</p>
                <hr />
                <div style={{ display: 'flex' }}>
                    <GoogleLogin
                        logo_alignment='center'
                        shape='pill'
                        type='standard'
                        width='100%'

                        onSuccess={handleLogin}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    /></div>

            </div>
            // </div>
        );
    } else {
        view = (
            <Dashboard></Dashboard>
        );
    }

    return view;


};


export default LoginPage;
