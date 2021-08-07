import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
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