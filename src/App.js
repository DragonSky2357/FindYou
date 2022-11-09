import React, {useState} from 'react';
import styled from "styled-components";
import Navlogin from "./components/Navlogin";
import {BrowserRouter, Route,Routes} from'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navlogin 
        logo="SW로고"
        sign="로그인"
        account="회원가입" 
      ></Navlogin>
      </BrowserRouter>
    </div>
  );
}

export default App;
