import React from 'react';
import { RoomInfoT } from '../../types/roomType';
import { Users } from '../../types/userType';
import Cards from './Cards';

type Props = {
    userAll:Users;
    roomInfo:RoomInfoT;
    checkItem:(id:string ,roomId:string, index:number)=>void;
}
const CardsContainer = ({userAll,checkItem,roomInfo}:Props) => {
    return <>{
        <Cards userAll={userAll} checkItem={checkItem} roomInfo={roomInfo}/>
    }</>
}

export default CardsContainer;