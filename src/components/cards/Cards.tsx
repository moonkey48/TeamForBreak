import React from 'react';
import { RoomInfoT } from '../../types/roomType';
import { Users } from '../../types/userType';
import Card from '../card/card';
import s from './Cards.module.css';

type Props = {
    userAll:Users;
    roomInfo:RoomInfoT;
    checkItem:(id:string ,roomId:string, index:number)=>void;
}
const Cards = ({userAll,roomInfo,checkItem}:Props) => {
    return <div className={s.CardsBox}>
        <ul className={s.CardList}>
            {roomInfo.memberIds.map((userId,idx)=>{
                return <Card user={userAll[userId]} roomId={roomInfo.roomId} key={idx} checkItem={checkItem}/>
            })}
        </ul>
    </div>
}

export default Cards;