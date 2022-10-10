import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import EditContainer from './pages/Edit/EditContainer';
import LoginContainer from './pages/Login/LoginContainer';
import MainContainer from './pages/Main/MainContainer';
import RoomsContainer from './pages/Rooms/RoomsContainer';
import { calculateTime, getTimeEnd } from './service/calculator';
import {Database} from './service/database';
import app from './service/firebase';
import {AuthService} from './service/firebaseAuth';
import { RoomInfoT, RoomsT } from './types/roomType';
import { User, UserLogin, Users } from './types/userType';

const firebaseAuth = new AuthService(app);
const database = new Database(app);

function App() {
  const [user, setUser] = useState<User>({
    name:'',
    uid:'',
    email:'',
    rooms:{}
  })
  const [roomsAll,setRoomsAll] = useState<RoomsT>({})
  const [userAll,setUserAll] = useState<Users>({})

  //toDolist Check
  const checkItem = (id:string ,roomId:string, index:number) =>{
      let updated = {...userAll};
      updated[id].rooms[roomId].todoList[index].done = updated[id].rooms[roomId].todoList[index].done===true?false:true;
      setUserAll(updated);
      //update user all 
      //firebase update user
  }

  //toDoList 내용 수정
  const changeItem = (id:string ,roomId:string, index:number, content:string) =>{
    let updated = {...userAll};
    updated[id].rooms[roomId].todoList[index].content = content;
    setUserAll(updated);
    //update user All 
    //firebase update user data
  }
  //
  const joinNewRoom = (userId:string, roomId:string)=>{
    let updatedUser = {...user};
    updatedUser.rooms[roomId] = {
        theme:'green',
        todoList:[
          {
            done:false,
            content:'도전할 목표를 설정해보세요.'
          }
        ]
    }
    let updatedUsers = {...userAll};
    updatedUsers[userId] = {...updatedUser};
    setUserAll(updatedUsers);

    let updatedRooms = {...roomsAll};
    updatedRooms[roomId].member[user.name] = user.name;
    updatedRooms[roomId].memberIds[user.uid] = user.uid;
    
    setRoomsAll(updatedRooms)

    //Firebase
      database.updateUser(setUser, userId, updatedUsers[userId]);
      database.updateRoom(roomId,updatedRooms[roomId])

      return true;
  }



  const makeTeam = (title:string, description:string, year:number, month:number, day:number,
      fine:number,uid:string) =>{
    const newTeam:RoomInfoT = {
      title,
      description,
      roomId:`${Date.now()}`,
      password:`hello ${user.name}`,
      theme:'green',
      member:{[user.name]:user.name},
      memberIds:{uid:uid},
      startTime:Date.now(),
      endTime:getTimeEnd(year,month,day),
      remain:calculateTime(Date.now(),getTimeEnd(year,month,day)),
      fine_total:0,
      fine_per_day:fine,
      fine_each:{uid:0,},
    }
    let updated = {...roomsAll};
    updated[newTeam.roomId] = newTeam;
    setRoomsAll(updated);

    return newTeam.roomId;
  }

  //Login
  const userOn = (loginResult:User)=>{
    console.log(loginResult);
    if(loginResult.uid!==null){
      //기존 데이터가 없는 경우
      if(userAll[loginResult.uid]===undefined){
        const newUser = {
          name:loginResult.name,
          uid:loginResult.uid,
          email:loginResult.email,
          rooms:{}
        }
        database.updateUser(setUser,loginResult.uid, newUser)
      }else{
        //기존 데이터가 있는 경우
        database.readUser(setUser, loginResult.uid);
      }
    }
  }
  //Logout
  const userOff = ()=>{
    setUser({
      name:'',
      uid:'',
      email:'',
      rooms:{}
    });
  }
  //각 팀별 제한 기간 계산
  const updateDateAll = () =>{
    let updated = {...roomsAll};
    Object.keys(updated).map((key)=>{
      updated[key].remain = calculateTime(Date.now(), updated[key].endTime);
    })
    setRoomsAll(updated);
  }
  useEffect(()=>{
    //모든 데이터 정리 및 모든 user, room 데이터 가져오기 
    updateDateAll();
    database.readUsersAll(setUserAll);
    database.readRoomsAll(setRoomsAll);
  },[]);
  useEffect(()=>{
    // Object.keys(userAll).map(uid=>{
    //   console.log(userAll[uid].rooms)
    //   Object.keys(userAll[uid].rooms).map(key=>console.log(userAll[uid].rooms[key])); 
    // })
  },[userAll])

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginContainer user={user} userOn={userOn} firebaseAuth={firebaseAuth}/>} />
      <Route path='/Rooms' element={<RoomsContainer joinNewRoom={joinNewRoom} makeTeam={makeTeam} userOff={userOff} user={user} roomsAll={roomsAll} firebaseAuth={firebaseAuth}/>} />
      <Route path='/Main' element={<MainContainer user={user} roomsAll={roomsAll} userOff={userOff} userAll={userAll} checkItem={checkItem} changeItem={changeItem}/>}/>
      <Route path='/Edit' element={<EditContainer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
