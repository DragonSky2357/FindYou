import React, {useState, createContext} from 'react';
import styled from "styled-components";
import Navlogin from "./components/Navlogin";
import Fixdatat from "./components/Fixdata"
import {BrowserRouter, Route,Routes} from'react-router-dom';

const myID = createContext();
const [isLogin,setLogin] = useState(false);


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navlogin logged={isLogin} onLogout></Navlogin>
      </BrowserRouter>
    </div>
  );
}

export default App;
