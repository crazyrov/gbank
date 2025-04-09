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


const url = "http://localhost:5000";
const LoginPage = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [triggerEffect, setTriggerEffect] = useState(null);


    const handleLogin = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        setTriggerEffect(decoded)
    };




    useEffect(() => {
        if (triggerEffect) {
            localStorage.setItem('token', triggerEffect);

            fetch(url + "/check_user?user=" + triggerEffect.email)
                .then((response) => {
                    if (response.status === 200) {
                        response.json().then((body) => {
                            const payload = {
                                name: triggerEffect.given_name,
                                email: triggerEffect.email,
                                token: '',
                                image: triggerEffect.picture,
                                existing_user: true,
                                account_number: body[0].account_number,
                                balance: body[0].balance,
                                address: body[0].address,
                                phone: body[0].phone
                            }
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
                }
                )
            setTriggerEffect(null);
        }
    }, [triggerEffect]);

    const view = user.name === "" ? (
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
    ) : (
        <Dashboard></Dashboard>
    )

    return view;


};


export default LoginPage;
