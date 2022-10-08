import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import EditContainer from './pages/Edit/EditContainer';
import LoginContainer from './pages/Login/LoginContainer';
import MainContainer from './pages/Main/MainContainer';
import RoomsContainer from './pages/Rooms/RoomsContainer';
import app from './service/firebase';
import {AuthService} from './service/firebaseAuth';
import { RoomsT } from './types/roomType';
import { User, UserLogin, Users } from './types/userType';

const firebaseAuth = new AuthService(app);

function App() {
  const [user, setUser] = useState<User>({
    name:'',
    uid:'',
    email:'',
    rooms:{}
  })
  const roomsAll:RoomsT ={
    'room1':{
          title:'Daily Design',
          description:'A graphic design team for breaking 3D modeling skill.',
          progress:30,
          roomId:'room1',
          password:'pw_room1',
          theme:'green',
          member:['austin','lizzy'],
          memberIds:['id1','id2'],
          day:'2022/10/30',
          fine_total:30000,
          fine_each:{'austin':10000,'lizzy':20000,},
    },
    'room2':{
          title:'Log the Day',
          description:'오늘의 코드가 미래의 나를 살린다.',
          progress:10,
          roomId:'room2',
          password:'pw_room2',
          theme:'orange',
          member:['seven','moonkey'],
          memberIds:['id3','id4'],
          day:'2022/10/30',
          fine_total:10000,
          fine_each:{'seven':0,'moonkey':10000,},
    },
    'room3':{
        title:'Book Book',
        description:'매일의 한줌 나눔',
        progress:50,
        roomId:'room3',
        password:'pw_room3',
        theme:'pink',
        member:['zelly','lily'],
        memberIds:['id5','id6'],
        day:'2022/10/30',
        fine_total:30000,
        fine_each:{'zelly':10000,'lily':20000,},
    },
  }
  const [userAll,setUserAll] = useState<Users>({
      'id1':{
        name:'austin',
        uid:'id1',
        email:'gogo4905@gmail.com',
        rooms:{
          'room1':{
            theme:'green',
            todoList:[
              {content:'Daily Coding',done:false},
              {content:'CS Research',done:false},
            ],
          }
        }
      },
      'id2':{
        name:'lizzy',
        uid:'id2',
        email:'gogo4905@gmail.com',
        rooms:{
          'room1':{
            theme:'yellow',
            todoList:[
              {content:'UX 리서치',done:false},
              {content:'포트폴리오 완성',done:false},
            ],
          }
        }
      },
      'id3':{
        name:'Seven',
        uid:'id3',
        email:'gogo4905@gmail.com',
        rooms:{
          'room2':{
            theme:'pink',
            todoList:[
              {content:'UX 리서치',done:false},
              {content:'포트폴리오 완성',done:false},
            ],
          }
        }
      },
      'id4':{
        name:'moonkey',
        uid:'id4',
        email:'gogo4905@gmail.com',
        rooms:{
          'room2':{
            theme:'orange',
            todoList:[],
          }
        }
      },
      'id5':{
        name:'zelly',
        uid:'id5',
        email:'gogo4905@gmail.com',
        rooms:{
          'room3':{
            theme:'green',
            todoList:[
              {content:'브랜딩 미메시스',done:false},
              {content:'포트폴리오 완성',done:false},
            ],
          }
        }
      },
      'id6':{
        name:'lily',
        uid:'id6',
        email:'gogo4905@gmail.com',
        rooms:{
          'room3':{
            theme:'yellow',
            todoList:[
              // {content:'UI 미메시스',done:false},
              // {content:'포트폴리오 완성',done:false},
            ],
          }
        }
      },
    })
  const checkItem = (id:string ,roomId:string, index:number) =>{
      let updated = {...userAll};
      updated[id].rooms[roomId].todoList[index].done = updated[id].rooms[roomId].todoList[index].done===true?false:true;
      setUserAll(updated);
  }
  const userOn = (loginResult:User)=>{
    console.log(loginResult);
    if(loginResult.uid!==null){
      setUser(loginResult);
    }
  }
  const userOff = ()=>{
    setUser({
      name:'',
      uid:'',
      email:'',
      rooms:{}
    });
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginContainer user={user} userOn={userOn} firebaseAuth={firebaseAuth}/>} />
      <Route path='/Rooms' element={<RoomsContainer userOff={userOff} user={user} roomsAll={roomsAll} firebaseAuth={firebaseAuth}/>} />
      <Route path='/Main' element={<MainContainer roomsAll={roomsAll} userOff={userOff} userAll={userAll} checkItem={checkItem}/>}/>
      <Route path='/Edit' element={<EditContainer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
