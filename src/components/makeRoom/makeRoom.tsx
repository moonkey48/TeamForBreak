import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/userType';
import s from './makeRoom.module.css';

type Props = {
    user:User;
    setIsNewTeam:React.Dispatch<React.SetStateAction<boolean>>;
    makeTeam:(
        title:string, 
        description:string, 
        year:number,
        month:number,
        day:number,
        fine:number,
        uid:string)=>void;
}
const MakeRoom = ({user,setIsNewTeam,makeTeam}:Props) => {
    const navigate = useNavigate();
    const [titleState,setTitleState] = useState<string>('');
    const [descState,setDescState] = useState<string>('');
    const [yearState,setYearState] = useState<string>('');
    const [monthState,setMonthState] = useState<string>('');
    const [dayState,setDayState] = useState<string>('');
    const [fineState,setFineState] = useState<string>('');

    const handleMakeTeam = () =>{

        //Type check, uid null check needed
        const roomId = makeTeam(titleState,descState,Number(yearState),Number(monthState),Number(dayState),Number(fineState),user.uid);
        navigate({
            pathname:'/Main',
            search:`?${roomId}`
        })
    }

    return <div className={s.container}>
        <div className={s.popup}>
            <form>
                <dl>
                    <dt>타이틀</dt>
                    <dd>
                        <input 
                        className={s.input_title} 
                        type="text" 
                        placeholder='ex. Daily Coding'
                        value={titleState}
                        onChange={(e)=>setTitleState(e.target.value)}
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>설명</dt>
                    <dd>
                        <textarea 
                        placeholder='ex. A graphic design team for breaking 3D modeling skill ' 
                        className={s.input_desc} cols={30} rows={10}
                        value={descState}
                        onChange={(e)=>setDescState(e.target.value)}
                        ></textarea>
                    </dd>
                </dl>
                <dl>
                    <dt>목표날짜</dt>
                    <dd className={s.date}>
                        <input 
                        placeholder='2022' 
                        className={s.input_year} type="text" 
                        value={yearState}
                        onChange={(e)=>setYearState(e.target.value)}
                        />년 
                        <input 
                        placeholder='10' 
                        className={s.input_month} type="text" 
                        value={monthState}
                        onChange={(e)=>setMonthState(e.target.value)}
                        />월 
                        <input 
                        placeholder='22' 
                        className={s.input_day} type="text" 
                        value={dayState}
                        onChange={(e)=>setDayState(e.target.value)}
                        />일 
                    </dd>
                </dl>
                <dl>
                    <dt>실패 벌금</dt>
                    <dd>
                        <input 
                        placeholder='ex. 1000' 
                        className={s.input_fine} type="text" 
                        value={fineState}
                        onChange={(e)=>setFineState(e.target.value)}
                        />원
                        <p className={s.fine_description}>1회 실패시 누적되는 벌금입니다.<br />나중에 수정가능합니다.🙃
                        </p>
                    </dd>
                </dl>
            </form>
            <h3 className={s.message}>새로운 팀을 생성하신 스타터님께서는 Edit 페이지에서<br />참여코드를 원하는 팀원분들께 공유해주세요.</h3>
            <div className={s.buttonBox}>
                <button className={s.cancel} onClick={()=>setIsNewTeam(false)}>취소</button>
                <button className={s.create} onClick={()=>handleMakeTeam()}>팀 생성하기</button>
            </div>
        </div>
    </div>
}

export default MakeRoom;