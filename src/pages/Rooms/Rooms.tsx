import React from 'react';
import s from './Rooms.module.css';
import { UserLogin } from '../../types/userType';

type Props ={
    user:UserLogin;
    userOff:()=>void;
}
const Rooms = ({user,userOff}:Props) => {
    return <div className={s.container}>
        <section className={s.leftWrap}>
            <h1 className={s.logo}></h1>
            <h3 className={s.hello}>안녕하세요,<br />{user.name}님</h3>
            <button className={s.logoutButton} onClick={()=>userOff()}>logout</button>
        </section>
        <section className={s.rightWrap}></section>
    </div>
}

export default Rooms;