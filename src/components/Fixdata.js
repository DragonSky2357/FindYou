import React from 'react'
import styled from 'styled-components'
function Fixdata() {
  return (
    <Fix_box>
      <Title>회원정보 수정</Title>
      <Fix_item>
      <li><Fix_p>학번 : 정보</Fix_p></li>
      <li><Fix_p>아이디 : 정보</Fix_p></li>
      <li>학과<Fix_button type="button">수정</Fix_button></li>  {/*Fixdata_depart로 넘어감 */}
      <li>비밀번호<Fix_button type="button">수정</Fix_button></li> {/*Fixdate_password로 넘어감 */}
      <li>이메일<Fix_button type="button">수정</Fix_button></li>  {/*Fixdate_email로 넘어감 */}
      <li>닉네임<Fix_button type="button">수정</Fix_button></li>   {/*Fixdate_nickname로 넘어감*/}
      </Fix_item>
    </Fix_box>
  )
}
      
export default Fixdata;

const Fix_box = styled.div`
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

