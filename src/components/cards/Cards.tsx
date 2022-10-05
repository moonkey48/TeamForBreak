import React from 'react';
import { Users } from '../../types/userType';
import Card from '../card/card';
import s from './Cards.module.css';

type Props = {
    userInfo:Users;
    checkItem:(id:string , index:number)=>void;
}
const Cards = ({userInfo,checkItem}:Props) => {
    return <div className={s.CardsBox}>
        <ul className={s.CardList}>
            {Object.keys(userInfo).map((key)=>{
                return <Card user={userInfo[key]} key={key} checkItem={checkItem}/>
            })}
        </ul>
    </div>
}

export default Cards;