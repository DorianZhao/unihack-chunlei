import React from 'react';
import {Link} from 'react-router-dom';
import './loginpage.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const LoginPage = () => (
    <div className='login-page'>
        <SignIn />
        <SignUp />

    </div>
);

export default LoginPage
