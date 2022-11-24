import React from 'react';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';



function Fixdata_password() {
  const [password,pwState] = useState(''); //password 상태값
  const changePw = (e) =>{ pwState(e.target.value);}; //password입력값바꾸기
  var url; //주소
  const changeButton = () =>{ 
    axios.post(url,{userpw:password})
  .then(function(response){console.log(response);}) //성공시
  .catch(function(error){ //실패
    console.log(error);
  })
  };
  //랜더링될때마다 실행됨
  {/*useEffect(()=>{
  
  });*/}

  return (
    <PW_box>
      <Title>패스워드 수정</Title>
      <PW_ul>
        <li>패스워드<input type="password" onChange={changePw} value={password} name="userpw"></input></li>
        <li><PW_button type="button" onClick={changeButton}>수정</PW_button></li>
    </PW_ul>
    </PW_box>
  );
}

export default Fixdata_password;
const PW_box = styled.div`  //전체박스
  position: absolute;
  top:50%;
  left:50%;
  margin:-250px 0 0 -250px;
  border : 1px solid  #47b5ff;
  height:500px;
  width:500px;
  
  
display:grid;
`
const Title = styled.p` //p태그
color:#47b5ff;
 font-size:40px;
 font-weight:bold;
 padding:0px;
 margin-bottom:0px;
 margin-left:25px;
 `
const PW_ul = styled.ul` //ul
  border:1px solid #47b5ff;
  padding:0px;
  
  display:grid;
  
   
  list-style-type:none;
  

 li{
   margin:0px;
   
   height:50px;
   display:grid;
   grid-template-columns: 100px 60px;
   grid-template-rows: 50px;
   justify-content: space-between;
   align-items:center;
   padding:0 15px 0 30px;
 }
`
const PW_button = styled.button`  //버튼
  height:34px;
`