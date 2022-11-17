import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const [nickname,nameState] = useState(''); //nickname 상태값
const changeNn = (e) =>{ nameState(e.target.value);}; //nickname입력값바꾸기
var url; //주소
const changeButton = () =>{ 
  axios.post(url,{usernickname:nickname})
.then(function(response){console.log(response);}) //성공시
.catch(function(error){ //실패
  console.log(error);
})
};
//랜더링될때마다 실행됨
{/*useEffect(()=>{

});*/}
function Fixdata_nickname() {
  return (
    <Nn_box>
      <Title>닉네임 수정</Title>
      <Nn_ul>
        <li>닉네임<Nn_input type="text" onChange={changeNn} value={nickname} name={usernickname}></Nn_input></li>
        <li><Nn_button type="button" onClick={changeButton}>수정</Nn_button></li>
    </Nn_ul>
    </Nn_box>
  );
}

export default Fixdata_nickname;
const Nn_box = styled.div`  //전체박스
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
const Nn_ul = styled.ul` //ul
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
const Nn_input = styled.input`  //  nickname 작성버튼
  height:34px;
`
const Nn_button = styled.button`  //수정 버튼
  height:34px;
`

