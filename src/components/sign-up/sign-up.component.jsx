<<<<<<< HEAD
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './sign-up.styles.scss';

let username;

class SignUp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }
    
    signup(){
        // helper function to insert new account information after user sign up
        // console.log("signing up")
        const url = 'http://127.0.0.1:5000/signup';
        axios.get(url,{
            params: {
                username: this.state.username,
                password: this.state.password
            },
        }).then((response) => {
            console.log(response);
            //history.push('/login');
        });
      }

    handleSubmit = event => {
      event.preventDefault();
      // console.log("handle submit");
      this.signup();
      this.setState({username: '', password: ''});
    };

    handleChange = event => {
        const { value, name } = event.target;
        console.log("handle change");
        //console.log(value)
        //console.log(name)

        this.setState({ [name]: value });
    };

    render(){
        return(
            <div className = 'sign-up'>
                <h1> I do not have an account</h1>
                <span>Sign in with your username and password</span>


                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='username'
                    type='username'
                    handleChange={this.handleChange}
                    value={this.state.username}
                    label='username'
                
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                
                />
                
                <CustomButton type='submit'> Sign up </CustomButton>
                
                </form>
            </div>
        );
    }
}

export default SignUp
=======
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './sign-up.styles.scss';

let username;

class SignUp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }


    handleSubmit = event => {
      event.preventDefault()
      this.setState({username: '', password: ''});
    };

    handleChange = event => {
        const { value, name } = event.target;
        console.log(value)
        console.log(name)

        this.setState({ [name]: value });
    };

    render(){
        return(
            <div className = 'sign-up'>
                <h1>  注册  </h1>
                <span></span>


                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='username'
                    type='username'
                    handleChange={this.handleChange}
                    value={this.state.username}
                    label='用户名'

                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='密码'

                />
                <Link to = "/feed">
                    <CustomButton type='submit'> 注册 </CustomButton>
                </Link>
                </form>
            </div>
        );
    }
}

export default SignUp
>>>>>>> 3c5348a9dd1f5ac684a1624396640bda6be0804c
