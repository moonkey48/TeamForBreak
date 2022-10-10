import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MakeRoom from '../../components/makeRoom/makeRoom';
import { AuthServiceI } from '../../service/firebaseAuth';
import { RoomsT } from '../../types/roomType';
import { User, UserLogin } from '../../types/userType';
import Rooms from './Rooms';

type Props ={
    firebaseAuth: AuthServiceI;
    user:User;
    userOff:()=>void;
    roomsAll:RoomsT;
    joinNewRoom:(userId:string, roomId:string)=>void;
    makeTeam:(
        title:string, 
        description:string, 
        year:number,
        month:number,
        day:number,
        fine:number,
        uid:string)=>string;
}
const RoomsContainer = ({firebaseAuth,user,userOff,roomsAll,makeTeam,joinNewRoom}:Props) => {
    const navigate = useNavigate();
    const [isNewTeam,setIsNewTeam] = useState(false); 
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
            joinNewRoom(user.uid, roomId);
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
    return <>
    <Rooms user={user} userOff={userOff} goRoomNow={goRoomNow} goRoomNew={goRoomNew} roomsAll={roomsAll} setIsNewTeam={setIsNewTeam} />
    {isNewTeam?<MakeRoom user={user} makeTeam={makeTeam} setIsNewTeam={setIsNewTeam}/>:''}
    </>
}

export default RoomsContainer;