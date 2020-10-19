import React, { useState } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndRegisterContainer, ToggleNewUserButton } from './sign-in-and-register.styles';

const SignInAndRegisterPage = () => {
    const [ newUser, setNewUser ] = useState(true);

    const toggleNewUser = () => setNewUser(!newUser);

    return (
    <SignInAndRegisterContainer>
        {
            newUser? 
                <div>
                    <SignUp />
                    <ToggleNewUserButton onClick={toggleNewUser}>Already registered? Click to sign in.</ToggleNewUserButton>
                </div>
                 : <div>
                    <SignIn />
                    <ToggleNewUserButton onClick={toggleNewUser}>Create a new account.</ToggleNewUserButton>
                 </div>
                 
        }
        
    </SignInAndRegisterContainer>
)}

export default SignInAndRegisterPage;