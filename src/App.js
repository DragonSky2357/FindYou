import React, {useState, createContext} from 'react';
import styled from "styled-components";
import Navlogin from "./components/Navlogin";
import Fixdata from "./components/Fixdata"
import {BrowserRouter, Route,Routes} from'react-router-dom';


const myID = createContext();


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navlogin></Navlogin>
      </BrowserRouter>
     {/* <Fixdata></Fixdata>*/}
    </div>
  );
}

export default App;
