import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './sign-in.styles.scss';

let username;

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            wrong: false
        };
    }

    login(){
        const url = 'http://127.0.0.1:5000/login';
        axios.get(url,{
            params: {
                username: this.state.username,
                password: this.state.password
            },
        }).then((response) => {
            console.log(response);
            if(response['data']['result'] == true){
              username = this.state.username;
            } else {
                this.setState({
                    wrong: true
                })
            }
        });
    };

    handleSubmit = event => {
      event.preventDefault()
      this.login();
    };

    handleChange = event => {
        const { value, name } = event.target;
        console.log(value)
        console.log(name)

        this.setState({ [name]: value });
    };

    render(){
        return(
            <div className = 'sign-in'>
                <h1> I already have an account</h1>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='username'
                    type='username'
                    handleChange={this.handleChange}
                    value={this.state.username}
                    label='username'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                />
                <CustomButton type='submit'> Sign in </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn