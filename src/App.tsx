import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import LoginContainer from './pages/Login/LoginContainer';
import MainContainer from './pages/Main/MainContainer';
import RoomsContainer from './pages/Rooms/RoomsContainer';
import app from './service/firebase';
import {AuthService} from './service/firebaseAuth';
import { UserLogin } from './types/userType';

const firebaseAuth = new AuthService(app);

function App() {
  const [user, setUser] = useState<UserLogin>({
    name:'',
    uid:'',
    email:'',
  })
  const userOn = (loginResult:UserLogin)=>{
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
    });
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginContainer user={user} userOn={userOn} firebaseAuth={firebaseAuth}/>} />
      <Route path='/Rooms' element={<RoomsContainer userOff={userOff} user={user} firebaseAuth={firebaseAuth}/>} />
      <Route path='/Main' element={<MainContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
