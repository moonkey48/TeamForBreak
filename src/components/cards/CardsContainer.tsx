import React from 'react';
import { RoomInfoT } from '../../types/roomType';
import { User, Users } from '../../types/userType';
import Cards from './Cards';

type Props = {
    userAll:Users;
    roomInfo:RoomInfoT;
    user:User;
    changeItem:(id:string,roomId:string,index:number,content:string)=>void;
    checkItem:(id:string ,roomId:string, index:number)=>void;
}
const CardsContainer = ({userAll,user,checkItem,changeItem,roomInfo}:Props) => {
    return <>{
        <Cards userAll={userAll} user={user} checkItem={checkItem} changeItem={changeItem} roomInfo={roomInfo}/>
    }</>
}

export default CardsContainer;