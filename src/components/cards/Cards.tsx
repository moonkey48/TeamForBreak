import React from 'react';
import { RoomInfoT } from '../../types/roomType';
import { Theme, User, Users } from '../../types/userType';
import Card from '../card/card';
import s from './Cards.module.css';

type Props = {
    userAll:Users;
    user:User;
    roomInfo:RoomInfoT;
    changeItem:(id:string,roomId:string,index:number,content:string)=>void;
    checkItem:(id:string ,roomId:string, index:number)=>void;
    changeTheme:(id:string,roomId:string,theme:Theme)=>void;
}
const Cards = ({userAll,user,roomInfo,changeItem,checkItem,changeTheme}:Props) => {
    return <div className={s.CardsBox}>
        <ul className={s.CardList}>
            {Object.keys(roomInfo.memberIds).map((userId,idx)=>{
                return <Card user={user} changeItem={changeItem} cardUser={userAll[userId]} roomId={roomInfo.roomId} key={idx} checkItem={checkItem} changeTheme={changeTheme}/>
            })}
        </ul>
    </div>
}

export default Cards;