import React from 'react';
import { AuthServiceI } from '../../service/firebaseAuth';
import Rooms from './Rooms';

type Props ={
    firebaseAuth: AuthServiceI;
}
const RoomsContainer = ({firebaseAuth}:Props) => {
    return <Rooms/>
}

export default RoomsContainer;