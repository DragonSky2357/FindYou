import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//const config ={"Content-Type" : 'application/json'};
const [email,emailState] = useState(''); //email 상태값
const changeEmail = (e) =>{ emailState(e.target.value);}; //email 입력값바꾸기
var url; //주소
const changeButton = () =>{ 
  axios.post(url,{useremail:email})
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
    <Em_box>
      <Title>이메일 수정</Title>
      <Em_ul>
        <li>이메일<Em_input type="text" onChange={changeEmail} value={email} name={useremail}></Em_input></li>
        <li><Em_button type="button" onClick={changeButton}>수정</Em_button></li>
    </Em_ul>
    </Em_box>
  );
}

export default Fixdata_email;
const Em_box = styled.div`  //전체박스
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
const Em_ul = styled.ul` //ul
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
const Em_input = styled.input`  //  nickname 작성버튼
  height:34px;
`
const Em_button = styled.button`  //수정 버튼
  height:34px;
`
