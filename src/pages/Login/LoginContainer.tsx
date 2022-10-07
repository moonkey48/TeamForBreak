import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthServiceI } from '../../service/firebaseAuth';
import { User, UserLogin } from '../../types/userType';
import Login from './Login';

type Props ={
    firebaseAuth: AuthServiceI;
    user:User;
    userOn:(loginResult:User)=>void;
}
const LoginContainer = ({firebaseAuth,user,userOn}:Props) => {
    const navigate = useNavigate();
    const [alert,setAlert] = useState<string>('');
    useEffect(()=>{
        if(user!.uid!==''){
            navigate('/Rooms');
        }
    },[user])
    
    const handleSignIn = async() =>{
        firebaseAuth.signIn(userOn);
    }
    return <Login alert={alert} onSignIn={handleSignIn}/>
}

export default LoginContainer;