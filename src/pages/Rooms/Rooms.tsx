import React from 'react';
import s from './Rooms.module.css';
import { User, UserLogin } from '../../types/userType';
import RoomNow from '../../components/roomNow/roomNow';
import { RoomsT } from '../../types/roomType';
import RoomAll from '../../components/roomAll/roomAll';

type Props ={
    user:User;
    userOff:()=>void;
    roomsAll:RoomsT;
    setIsNewTeam: React.Dispatch<React.SetStateAction<boolean>>;
    goRoomNew:(roomId:string, roomPw:string,inputValue:string)=>boolean;
    goRoomNow:(roomId:string)=>void;
}
const Rooms = ({user,userOff,roomsAll,goRoomNew,goRoomNow,setIsNewTeam}:Props) => {
    
    return <div className={s.container}>
        <section className={s.leftWrap}>
            <h1 className={s.logo}></h1>
            <h3 className={s.hello}>안녕하세요,<br />{user.name}님</h3>
            <button className={s.logoutButton} onClick={()=>userOff()}>logout</button>
            <button className={s.makeTeamButton} onClick={()=>setIsNewTeam(true)}>새로운 Team 만들기</button>
        </section>
        <section className={s.rightWrap}>
            <div className={s.roomNowWrap}>
                <h3 className={s.main_title}>현재 참여중인 Team</h3>
                <ul className={s.roomNow_list}>
                {
                    Object.keys(roomsAll).filter((roomId)=>{
                        if(user.rooms){
                            if(user.rooms[roomId]!==undefined){
                                return true
                            }else{
                                return false
                            }
                        }
                    }).map((roomId,idx)=>{
                        return <RoomNow goRoomNow={goRoomNow} key={idx} room={roomsAll[roomId]}/>
                    })
                }
                </ul>
            </div>
            <div className={s.roomAllWrap}>
                <h3 className={s.main_title}>진행중인 모든 Team</h3>
                <ul className={s.roomAll_list}>
                {
                    Object.keys(roomsAll).map((roomId,idx)=>{
                        return <RoomAll goRoomNew={goRoomNew} key={idx} room={roomsAll[roomId]}/>
                    })
                }
                </ul>
            </div>
        </section>
    </div>
}

export default Rooms;