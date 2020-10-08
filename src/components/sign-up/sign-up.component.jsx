import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
    const [state, setState] = useState({
        
    });

    let { displayName, email, password, confirmPassword } = state;

    const handleSubmit = async event => {
        event.preventDefault();
        let { password, confirmPassword } = state;
        
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart(state);

        setState( {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    const handleChange = event => {
        const { name, value } = event.target;
        
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='display name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='confirm password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userInfo) => dispatch(signUpStart(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUp);