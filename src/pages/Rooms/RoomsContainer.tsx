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
    joinNewRoom:(userId:string, roomId:string)=>boolean;
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
        if(roomPw===inputValue){
            return true;
        }
        return false;
    }
    const goRoomNew = (roomId:string, roomPw:string, inputValue:string) =>{
         if(joinNewRoom(user.uid, roomId)){
            console.log(roomsAll);
            navigate({
                pathname:'/Main',
                search:`?${roomId}`
            });  
         }
    }
    
    useEffect(()=>{
        if(user.uid===''){
            navigate('/')
        }
    },[user]);
    
    return <>
    <Rooms user={user} userOff={userOff} goRoomNow={goRoomNow} goRoomNew={goRoomNew} roomsAll={roomsAll} setIsNewTeam={setIsNewTeam} checkPassword={checkPassword} />
    {isNewTeam?<MakeRoom user={user} makeTeam={makeTeam} setIsNewTeam={setIsNewTeam}/>:''}
    </>
}

export default RoomsContainer;