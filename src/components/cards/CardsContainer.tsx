import React from 'react';
import { Users } from '../../types/userType';
import Cards from './Cards';

type Props = {
    userInfo:Users;
    checkItem:(id:string , index:number)=>void;
}
const CardsContainer = ({userInfo,checkItem}:Props) => {
    return <Cards userInfo={userInfo} checkItem={checkItem}/>
}

export default CardsContainer;