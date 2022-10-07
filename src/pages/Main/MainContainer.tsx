import React, { useEffect, useState } from 'react';
import Main from './Main';
import {Todo, User, Users} from '../../types/userType';

type Props = {
  userInfo:Users;
  userOff:()=>void;
  checkItem:(id:string,index:number)=>void;
}
const MainContainer = ({userInfo,userOff,checkItem}:Props) => {
    return <Main userOff={userOff} userInfo={userInfo} checkItem={checkItem} />
}

export default MainContainer;