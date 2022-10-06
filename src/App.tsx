import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import LoginContainer from './pages/Login/LoginContainer';
import MainContainer from './pages/Main/MainContainer';
import app from './service/firebase';
import {AuthService,AuthServiceI} from './service/firebaseAuth';

const firebaseAuth = new AuthService(app);
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginContainer firebaseAuth={firebaseAuth}/>} />
      <Route path='/Main' element={<MainContainer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
