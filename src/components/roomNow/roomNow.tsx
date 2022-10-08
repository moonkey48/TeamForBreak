import React from 'react';
import { RoomInfoT } from '../../types/roomType';
import s from './roomNow.module.css';

type Props = {
    room:RoomInfoT,
    goRoomNow:(roomId:string)=>void;
}
const RoomNow = ({room,goRoomNow}:Props) => {
    return <li className={s.roomNow_item}>
        <div className={s.titleBox}>
            <h4 className={s.title}>{room.title}</h4>
        </div>
        <h4 className={s.remainDate}>D-{room.remain}</h4>
        <button onClick={()=>goRoomNow(room.roomId)} className={`${s.join} ${s[room.theme]}`}>참가하기</button>
    </li>
}

export default RoomNow;