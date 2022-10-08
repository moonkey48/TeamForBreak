import React, { useEffect, useState } from 'react';
import Main from './Main';
import {Todo, User, Users} from '../../types/userType';
import { useLocation } from 'react-router-dom';
import { RoomInfoT, RoomsT } from '../../types/roomType';

type Props = {
  userAll:Users;
  roomsAll:RoomsT;
  userOff:()=>void;
  checkItem:(id:string,roomId:string,index:number)=>void;
}
const MainContainer = ({userAll,roomsAll,userOff,checkItem}:Props) => {
    const location = useLocation();
    const [roomInfo,setRoomInfo] = useState<RoomInfoT>({
      title:'',
      description:'',
      progress:0,
      roomId:'',
      password:'',
      theme:'green',
      member:[],
      memberIds:[],
      day:'',
      fine_total:0,
      fine_each:{},
    });
    const [roomMembers, setRoomMembers] = useState<Users>();
    useEffect(()=>{
      const roomId =  location.search.replace('?','');
      setRoomInfo(roomsAll[roomId]);
      const userIds:string[] = roomsAll[roomId].memberIds;
    },[]);
    return <Main userOff={userOff} userAll={userAll} roomInfo={roomInfo} checkItem={checkItem} />
}

export default MainContainer;