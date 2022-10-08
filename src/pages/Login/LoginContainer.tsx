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
    useEffect(()=>{
        const startTime = 1665221258400;
        const goal = Date.UTC(2022,10,30);
        console.log(goal);
        const result = Math.floor(((goal-Date.now())/1000/60/60/24)-30);//day
        console.log(result);
    },[]);
    
    const handleSignIn = async() =>{
        firebaseAuth.signIn(userOn);
    }
    return <Login alert={alert} onSignIn={handleSignIn}/>
}

export default LoginContainer;