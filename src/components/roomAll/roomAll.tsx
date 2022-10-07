import React from 'react';
import { RoomT } from '../../types/roomType';
import s from './roomAll.module.css';

type Props = {
    room:RoomT;
}
const RoomAll = ({room}:Props) => {
    return <li className={s.roomAll_item}>
    <div className={s.titleBox}>
        <h4 className={s.title}>{room.title}</h4>
    </div>
    <div className={s.descriptionBox}>
        <h4 className={s.description}>{room.description}</h4>
    </div>
    <div className={s.progressBox}>
        <div className={s.progressBar}></div>
        <div className={s.progress}>{room.progress}%</div>
    </div>
    <div className={s.codeBox}>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label >참여코드</label>
            <input type="text" placeholder='스타터에게 코드를 공유받으세요.'/>
        </form>
    </div>
    <button className={`${s.join} ${s[room.theme]}`}>참가하기</button>
</li>
}

export default RoomAll;