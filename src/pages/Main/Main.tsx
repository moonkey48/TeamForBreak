import React, { useRef, useState } from 'react';
import s from './Main.module.css';
import HeaderContainer from '../../components/header/HeaderContainer';
import CardsContainer from '../../components/cards/CardsContainer';
import {Theme, User, Users} from '../../types/userType';
import { RoomInfoT } from '../../types/roomType';

type Props = {
    userAll: Users;
    roomInfo:RoomInfoT;
    user:User;
    userOff:()=>void;
    changeItem:(id:string,roomId:string,index:number,content:string)=>void;
    checkItem:(id:string ,roomId:string, index:number)=>void;
    changeTheme:(id:string,roomId:string,theme:Theme)=>void;
}

const Main = ({userAll,user,checkItem,userOff,changeItem,roomInfo,changeTheme}:Props) => {

    return <div className={s.container}>
        <HeaderContainer userOff={userOff} roomInfo={roomInfo}/>
        <CardsContainer user={user} userAll={userAll} changeItem={changeItem} checkItem={checkItem} roomInfo={roomInfo} changeTheme={changeTheme} />
    </div>
}

export default Main;