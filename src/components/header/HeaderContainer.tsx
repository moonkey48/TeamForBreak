import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoomInfoT } from '../../types/roomType';
import Header from './Header';

type Props ={
    roomInfo:RoomInfoT | undefined;
    userOff:()=>void;
}
const HeaderContainer = ({userOff,roomInfo}:Props) => {
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
        <Header roomInfo={roomInfo} handelLogout={handelLogout} handleGoRoom={handleGoRoom} handleGoEdit={handleGoEdit}/>
    )
}

export default HeaderContainer;