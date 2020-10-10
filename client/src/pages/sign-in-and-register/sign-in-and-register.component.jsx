import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndRegisterContainer } from './sign-in-and-register.styles';

const SignInAndRegisterPage = () => (
    <SignInAndRegisterContainer>
        <SignIn />
        <SignUp />
    </SignInAndRegisterContainer>
)

export default SignInAndRegisterPage;