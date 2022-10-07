import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthServiceI } from '../../service/firebaseAuth';
import { RoomsT } from '../../types/roomType';
import { User, UserLogin } from '../../types/userType';
import Rooms from './Rooms';

type Props ={
    firebaseAuth: AuthServiceI;
    user:User;
    userOff:()=>void;
    roomsAll:RoomsT;
}
const RoomsContainer = ({firebaseAuth,user,userOff,roomsAll}:Props) => {
    const navigate = useNavigate();
    const goRoomNow = (roomId:string) =>{
        navigate({
            pathname:'/Main',
            search:`?${roomId}`
        });
    }
    const checkPassword = (roomPw:string, inputValue:string) =>{
        console.log(roomPw);
            console.log(inputValue);
        if(roomPw===inputValue){
            return true;
        }
        return false;
    }
    const goRoomNew = (roomId:string, roomPw:string, inputValue:string) =>{
        if(checkPassword(roomPw,inputValue)){
            user.rooms!.push(roomId);
            navigate({
                pathname:'/Main',
                search:`?${roomId}`
            });
            return true;
        }else{
            return false;
        }
    }
    useEffect(()=>{
        if(user.uid===''){
            navigate('/')
        }
    },[user]);
    return <Rooms user={user} userOff={userOff} goRoomNow={goRoomNow} goRoomNew={goRoomNew} roomsAll={roomsAll}/>
}

export default RoomsContainer;