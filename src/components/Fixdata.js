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
  const [_student,setSu]=useState();
  const [_id,setId]=useState(); //아이디
  const[_department,setDe] = useState(); // 학과
  const [_email,setEmail] = useState(); //이메일
  const [_password,setPass] = useState();  //패스워드
  const [_nickname,setNick] = useState();


  //보류
  const Resource = (data) => {
    console.log("data는",data.studentId);
    setSu(data.studentId);
    console.log("받아온 studentid는",_student);
    setId(data.id);
    setDe(data.department);
    setEmail(data.email);
    setPass(data.password);
    setNick(data.nickname);
                      
  }

  
  const onChanged = () =>{
    
    console.log("변경값",_department);
    console.log("닉네임변경값",_nickname);
    if(_data.department != _department)
    {axios.patch('/user/20175129',{
       "department" : _department
       
     })
    .then((response)=>{console.log(response.data)});
    }
    if(_data.nickname != _nickname)
    {
      axios.patch('/user/20175129',{
        "nickname" : _nickname
      }).
      then((res)=>console.log(res.data));
    }
    
  };

  const changedSubmit=(e)=>{
    e.preventDefault();
    console.log("변경값",_department);
    console.log("닉네임변경값",_nickname);
    axios.patch('/user/20175129',{
      "department" : _department,
      "nickname" : _nickname
    })
    .then((response)=>{console.log(response.data);})
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
                      setPass(response.data.password);
                      setNick(response.data.nickname);
  
                      })
  .catch((error)=>{console.log(error);});
 },[])
  
  return (
    <div className="fixdata">
      <p>회원정보 수정 </p>

      <form name="fix" onSumbit={changedSubmit}  >
          <p>학번 : {_student}</p> 
          <p>아이디 : {_id}</p>
          <p>학과 :<span>{_department}</span> <input type="text" value={_department} name="department" onChange={(e)=>setDe(e.target.value)} ></input></p>
          <p>닉네임: {_nickname} <input type="text" value={_nickname} name="nickname" onChange={(e)=>setNick(e.target.value)}></input></p>
          <p>비밀번호:{_password}<input type="password"></input></p>
          <button type="button" onClick={onChanged}>수정</button>
          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
      
export default Fixdata;

/*const Fix_box = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  margin:-250px 0 0 -250px;
  border : 1px solid  #47b5ff;
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
 font-weight:normal;
 `
const Fix_item = styled.ul`
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
const Fix_button = styled.button`
  height:34px;
`
*/
