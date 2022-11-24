import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Loginform from './Component/Loginform';
import Joinform from './Component/Joinform';
import SearchError from './Component/SearchError';

import Navlogin from "./Component/Navlogin";

import Tap from './Component/Tap.js'
import Search from './Component/Search.js'

import Home from './Page/Home.js'
import GapLectOrNoLect from './Page/GapLectOrNoLect'
import DeliverTogether from './Page/DeliverTogether'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navlogin/>
        <Search/>
        <Tap/>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/GapLectOrNoLect" element={<GapLectOrNoLect/>}/>
            <Route path="/DeliverTogether" element={<DeliverTogether/>}/>
            <Route path="/Loginform" element={<Loginform/>}/>
            <Route path="/Joinform" element={<Joinform/>}/>
            <Route path="/SearchError" element={<SearchError/>}/>
            <Route path="/Navlogin" element={<Navlogin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
