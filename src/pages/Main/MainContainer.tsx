import React, { useEffect, useState } from 'react';
import Main from './Main';
import {Todo, User, Users} from '../../types/userType';
import { useLocation } from 'react-router-dom';
import { RoomInfoT, RoomsT } from '../../types/roomType';

type Props = {
  userAll:Users;
  roomsAll:RoomsT;
  user:User;
  userOff:()=>void;
  changeItem:(id:string,roomId:string,index:number,content:string)=>void;
  checkItem:(id:string,roomId:string,index:number)=>void;
}
const MainContainer = ({userAll,user,roomsAll,userOff,changeItem,checkItem}:Props) => {
    const location = useLocation();
    const [roomInfo,setRoomInfo] = useState<RoomInfoT>({
      title:'',
      description:'',
      roomId:'',
      password:'',
      theme:'green',
      member:[],
      memberIds:[],
      startTime:1669762400000,
      endTime:1669766400000,
      remain:0,
      fine_total:0,
      fine_each:{},
    });
    const [roomMembers, setRoomMembers] = useState<Users>();
    useEffect(()=>{
      const roomId =  location.search.replace('?','');
      setRoomInfo(roomsAll[roomId]);
      const userIds:string[] = roomsAll[roomId].memberIds;
    },[]);
    return <Main userOff={userOff} user={user} userAll={userAll} roomInfo={roomInfo} changeItem={changeItem} checkItem={checkItem} />
}

export default MainContainer;