import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//const config ={"Content-Type" : 'application/json'};
const [depart,departState] = useState(''); //email 상태값
const changedepart = (e) =>{ departState(e.target.value);}; //email 입력값바꾸기
var url; //주소
const changeButton = () =>{ 
  axios.post(url,{usedepart:depart})
.then(function(response){console.log(response);}) //성공시
.catch(function(error){ //실패
  console.log(error);
})
};
//랜더링될때마다 실행됨
{/*useEffect(()=>{
  axios.get(url)
});*/}

function Fixdata_email() {
  return (
    <De_box>
      <Title>학과 수정</Title>
      <De_ul>
        <li>학과<De_input type="text" onChange={changedepart} value={depart} name={userdepart}></De_input></li>
        <li><De_button type="button" onClick={changeButton}>수정</De_button></li>
    </De_ul>
    </De_box>
  );
}


export default Fixdata_email;
const De_box = styled.div`  //전체박스
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
const De_ul = styled.ul` //ul
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
const De_input = styled.input`  //  nickname 작성버튼
  height:34px;
`
const De_button = styled.button`  //수정 버튼
  height:34px;
`
