import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

  //useEffect로 axios get구현 -> 학번 , 아이디
  //Fix_item을 학번정보로 모두 바꿈
  //나머지 submit
 //axios put
//context api
//post form함수써서 등록하고 body값 
//localhost:3000/api/posts




 function Fixdata() {
  const [_data,setData]=useState([]);
  const [_student,setSu]=useState(""); 
  const [_id,setId]=useState(""); //아이디
  const[_department,setDe] = useState(""); // 학과
  const [_email,setEmail] = useState(""); //이메일
  const [_password,setPass] = useState("");  //패스워드
  const [_nickname,setNick] = useState("");



  
  const onChanged = () => {
    
      if( _department !== _data.department)
      { 
        console.log("학과 값이 바뀝니다");
        axios.patch('/user/20175129',{
         "department" : _department,
        })
        .then((res)=>console.log(res.data));
      }


      if( _nickname !== _data.nickname)
      {
        console.log("닉네임 값이 바뀝니다.");
        axios.patch('/user/20175129',{
          "nickname" : _nickname
      })
        .then((res)=>console.log(res.data));
       }
      
       if(_email !== _data.email )
       {
        console.log("이메일 값이 바뀝니다.");
        axios.patch('/user/20175129',{
          "email" : _email
        })
         .then((res)=>console.log(res.data));
       }
       
       if( _password !== "")
       {
        console.log("비밀번호 값이 바뀝니다.");
        axios.patch('/user/20175129',{
          "password" : _password
        })
        .then((res)=>console.log(res.data));
       }
       window.location.reload();
  };


  useEffect( ()=>
  {
    axios.get('/user/20175129')
  .then((response)=>{console.log("data: ",response.data);
                     {/*} setData(response.data);
  Resource(_data); */}
                      setData(response.data);
                      setSu(response.data.studentId);
                      setId(response.data.id);
                      setDe(response.data.department);
                      setEmail(response.data.email);
                      
                      setNick(response.data.nickname);
  
                      })
  .catch((error)=>{console.log(error);});
  },[]);
  
  return (
    <Fix_box>
      <Title>회원정보 수정</Title>

      <form name="fix">
        <Fix_item>
          <li><Fix_p>학번 : {_data.studentId}</Fix_p></li>
          <li><Fix_p>아이디 : {_data.id}</Fix_p> </li>
          <li><Fix_p>학과 : </Fix_p><Fix_input type="text" value={_department} name="department" onChange={(e)=>setDe(e.target.value)}></Fix_input></li>         
          <li><Fix_p>닉네임 : </Fix_p> <Fix_input type="text" value={_nickname} name="nickname" onChange={(e)=>setNick(e.target.value)}></Fix_input></li>
          <li><Fix_p>이메일 : </Fix_p> <Fix_input type="text" value={_email} name="email" onChange={(e)=>setEmail(e.target.value)}></Fix_input></li>
          <li><Fix_p>비밀번호 : </Fix_p><Fix_input type="password" value={_password} name="password" onChange={(e)=>{setPass(e.target.value);}}></Fix_input></li>
          
          <li><Fix_button type="button" onClick={onChanged}>취소</Fix_button>
              <Fix_button type="button" onClick={onChanged}>수정</Fix_button></li>
        </Fix_item>
          
      </form>
   </Fix_box>
  )
}
      
export default Fixdata;

const Fix_box = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  margin:-250px 0 0 -250px;
  border:2px solid #47b5ff;
  border-radius:5px;
  height:500px;
  width:500px;
  
  
display:grid;
`
const Title = styled.p`

color:#47b5ff;
 font-size:40px;
 font-weight:bold;
 padding:0px;
 margin-bottom:0px;
 margin-left:25px;
 
`
const Fix_p = styled.p`
 font-size:15px;
 width:300px; 

 `
const Fix_item = styled.ul`
  border-top:1px solid #47b5ff;
  padding:0px;
  
  display:grid;
  
   
  list-style-type:none;
  

 li{
   margin:0px;
   
   height:50px;
   display:grid;
   grid-template-columns: 75px 180px;
   grid-template-rows: 50px;
   
   align-items:center;
   padding:0 15px 0 30px;
 }
`

const Fix_input = styled.input`
  padding-left:10px;
  height:25px;
  width: 250px;
  `




const Fix_button = styled.button`
  background-color:#47b5ff;
  border:none;
  color:white;
  height:30px;
  width:70px;
  margin-left:100px;
  margin-right:50px;
  border-radius:5px;
`

