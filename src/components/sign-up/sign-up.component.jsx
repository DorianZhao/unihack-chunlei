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
