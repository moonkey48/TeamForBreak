import React from 'react';
import { AuthServiceI } from '../../service/firebaseAuth';
import Login from './Login';

type Props ={
    firebaseAuth: AuthServiceI;
}
const LoginContainer = ({firebaseAuth}:Props) => {
    const handleSignIn = () =>{
        firebaseAuth.signIn();
    }
    return <Login onSignIn={handleSignIn}/>
}

export default LoginContainer;