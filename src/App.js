import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



import Home from './Page/Home.js'
import GapLectOrNoLect from './Page/GapLectOrNoLect'
import DeliverTogether from './Page/DeliverTogether'

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                
                <Route path="/GapLectOrNoLect" element={<GapLectOrNoLect/>}/>
                <Route path="/DeliverTogether" element={<DeliverTogether/>}/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
