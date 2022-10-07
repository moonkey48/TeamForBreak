import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

type Props ={
    userOff:()=>void;
}
const HeaderContainer = ({userOff}:Props) => {
    const navigate = useNavigate();
    const handelLogout = () =>{
        userOff();
        navigate('/');
    }
    const handleGoRoom = () =>{
        navigate('/Rooms');
    }
    const handleGoEdit = () =>{
        navigate('/Edit');
    }
    return(
        <Header handelLogout={handelLogout} handleGoRoom={handleGoRoom} handleGoEdit={handleGoEdit}/>
    )
}

export default HeaderContainer;