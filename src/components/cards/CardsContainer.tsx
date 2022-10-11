import React from 'react';
import { RoomInfoT } from '../../types/roomType';
import { Theme, User, Users } from '../../types/userType';
import Cards from './Cards';

type Props = {
    userAll:Users;
    roomInfo:RoomInfoT;
    user:User;
    changeItem:(id:string,roomId:string,index:number,content:string)=>void;
    checkItem:(id:string ,roomId:string, index:number)=>void;
    changeTheme:(id:string,roomId:string,theme:Theme)=>void;
}
const CardsContainer = ({userAll,user,checkItem,changeItem,roomInfo,changeTheme}:Props) => {
    return <>{
        <Cards userAll={userAll} user={user} checkItem={checkItem} changeItem={changeItem} roomInfo={roomInfo} changeTheme={changeTheme}/>
    }</>
}

export default CardsContainer;