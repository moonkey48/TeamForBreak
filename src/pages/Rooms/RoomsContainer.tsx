import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthServiceI } from '../../service/firebaseAuth';
import { UserLogin } from '../../types/userType';
import Rooms from './Rooms';

type Props ={
    firebaseAuth: AuthServiceI;
    user:UserLogin;
    userOff:()=>void;
}
const RoomsContainer = ({firebaseAuth,user,userOff}:Props) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(user.uid===''){
            navigate('/')
        }
    },[user]);
    return <Rooms user={user} userOff={userOff}/>
}

export default RoomsContainer;