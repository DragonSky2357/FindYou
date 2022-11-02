import React from 'react';
import "./Navlogin.css";
function Navlogin() {
  return (
    <div className="header">
      <p className="logo">SW 로고</p>

      <div className="navbar">
        <ul className ="nav__ul">
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navlogin
