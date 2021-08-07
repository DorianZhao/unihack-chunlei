import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { history } from "../../App";

import './sign-in.styles.scss';

let userId;

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
            if(response['data']['results'].length > 0){
              userId = response['data']['results'][0];
              history.push('/feed');
            } else {
                this.setState({
                    wrong: true
                })
            }
        });
    };

    handleSubmit = event => {
      event.preventDefault();
      console.log("sign in handle submit");
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
                <h1> 登录 </h1>


                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='username'
                    type='username'
                    handleChange={this.handleChange}
                    value={this.state.username}
                    label='用户名'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='密码'
                    required
                />
                    <CustomButton type='submit'> 登录 </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
export {userId};
