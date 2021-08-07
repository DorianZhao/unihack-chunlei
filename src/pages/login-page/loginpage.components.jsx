<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';
import './loginpage.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const LoginPage = () => (
    <div className='login-page'>
        <SignIn />
        <SignUp />
        <Link className = 'option' to = '/'>
                Back to main
        </Link>
        
    </div>
);

export default LoginPage
=======
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
>>>>>>> 3c5348a9dd1f5ac684a1624396640bda6be0804c
