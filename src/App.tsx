import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContainer from './pages/Main/MainContainer';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainContainer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
