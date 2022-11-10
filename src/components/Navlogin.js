import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

/*  
  <Header> : Navlogin의 상위 div
  <Logo> : 홈페이지 로고
  <Navbar> : nav div

    border은 css test용
    1.글씨 크기? 
    2. 반응형수치
/   3. 로그인시 nav상태 바뀌기  로그인, 회원가입 -> 로그아웃 개인정보창
*/
function Navlogin(props) {
   const [_logo, setLogo] = useState(props.logo); //Logo의 props
   const [_sign, setSign] = useState(props.sign); //Navbar sign props, setEffect?
   const[_account,setAccount] = useState(props.account); //Navbar account props, setEffect?
  return (
  <Header> 
    <Logo>
      <p>{_logo}</p>
    </Logo>   

    <Navbar>
      <ul>
        <li><Link to="#">{_sign}</Link></li>
        <li><Link to="#">{_account}</Link></li>
      </ul>
    </Navbar>
  </Header>
    
  )
}

export default Navlogin;

const Header = styled.div` //Navlogin의 상위 div
 display:grid;
  
 margin:0;
 grid-template-columns: 200px 300px; //logo font크기와 연관있음
 grid-template-rows: 100px;
 column-gap: 100px; //width 작아져도 container item들의 간격 200px까지는 보임
 
 justify-content:space-between;
 align-items:center;
 
`
const Logo = styled.div` //로고 
 margin: 10px 0px 10px 15px;
 padding:0px;
 p {
 
 font-size:47px;
 font-weight:bold;
 color: #47b5ff;
 text-align:center;
 }
`

const Navbar = styled.div` //Nav전체 div
    
  
  
   margin-right:100px;
   ul {
    padding:0;
    list-style-type: none;
     display:grid;
     grid-template-columns: 1fr 1fr;
    
     align-items:center
   }
   li{
    padding:20px 10px;
    
    text-align:center;
    
      a{
    text-decoration-line:none;  
    color:#47B5FF;
    font-weight:bold;
    font-size:17px;
      }
   }    
`
