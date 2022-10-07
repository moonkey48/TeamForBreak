import React from 'react';
import { RoomT } from '../../types/roomType';
import s from './roomNow.module.css';

type Props = {
    room:RoomT,
    goRoomNow:(roomId:string)=>void;
}
const RoomNow = ({room,goRoomNow}:Props) => {
    return <li className={s.roomNow_item}>
        <div className={s.titleBox}>
            <h4 className={s.title}>{room.title}</h4>
        </div>
        <div className={s.progressBox}>
            <div className={s.progressBar}></div>
            <div className={s.progress}>{room.progress}%</div>
        </div>
        <button onClick={()=>goRoomNow(room.roomId)} className={`${s.join} ${s[room.theme]}`}>참가하기</button>
    </li>
}

export default RoomNow;