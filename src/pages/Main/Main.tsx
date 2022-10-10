import React, { useRef, useState } from 'react';
import s from './Main.module.css';
import HeaderContainer from '../../components/header/HeaderContainer';
import CardsContainer from '../../components/cards/CardsContainer';
import {User, Users} from '../../types/userType';
import { RoomInfoT } from '../../types/roomType';

type Props = {
    userAll: Users;
    roomInfo:RoomInfoT;
    user:User;
    userOff:()=>void;
    changeItem:(id:string,roomId:string,index:number,content:string)=>void;
    checkItem:(id:string ,roomId:string, index:number)=>void;
}

const Main = ({userAll,user,checkItem,userOff,changeItem,roomInfo}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    return <div className={s.container}>
        <HeaderContainer userOff={userOff} roomInfo={roomInfo}/>
        <CardsContainer user={user} userAll={userAll} changeItem={changeItem} checkItem={checkItem} roomInfo={roomInfo} />
    </div>
}

export default Main;