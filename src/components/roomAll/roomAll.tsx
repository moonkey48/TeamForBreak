import React, { useRef, useState } from 'react';
import { RoomInfoT } from '../../types/roomType';
import s from './roomAll.module.css';

type Props = {
    room:RoomInfoT;
    goRoomNew:(roomId:string, roomPw:string,inputValue:string)=>boolean;
}
const RoomAll = ({room,goRoomNew}:Props) => {
    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [placeholder, setPlaceHolder] = useState('스타터에게 코드를 공유받으세요.')
    
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
        <form ref={formRef} onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <label >참여코드</label>
            <input ref={inputRef} type="text" placeholder={placeholder}/>
        </form> 
    </div>
    <button onClick={()=>{
        if(!goRoomNew(room.roomId,room.password,inputRef.current!.value)){
            setPlaceHolder('잘못된 코드입니다.');
        }
        formRef.current!.reset();
    }} className={`${s.join} ${s[room.theme]}`}>참가하기</button>
</li>
}

export default RoomAll;