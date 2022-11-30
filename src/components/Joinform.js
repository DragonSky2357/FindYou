import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const Box = styled.div`
    display: grid;
    background: white;
    place-items: center;
    min-height: 100vh;
`;

const Join_Box = styled.div`
    width: 400px;
    background: #FFFFFF;
`;

const Join_header = styled.h1`
    font-size: 24px;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 30px;
`;

const Join_form = styled.div`
    position: relative;
    z-index: 1;
    max-width: 360px;
    margin: 0 auto 100px;
    text-align: center;
    padding: 20px 45px 45px 45px;
`;

const Join_input = styled.input`
    font-size: 14px;
    padding: 15px;
    background: #E0E0E0;
    background: #FFFFFF;
    border-radius: 3px;
    border: 1px solid #999;
    width: 100%;
    margin-bottom: 15px;
    box-sizing: border-box;
    place-items: center;
    outline: none;
`;

const Join_button = styled.button`
    background: #47B5FF;
    width: 100%;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    cursor: pointer;
`;

const Join_toLogin = styled.p`
    margin: 15px 0 0;
    color: #000000;
    font-size: 12px;
`;

const Join_text = styled.p`
    text-align: left;
    margin-bottom: 0px;
    margin-top: 10px;
`;

function Joinform() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [nickname, setNickname] = useState('');
  const [student, setStudent] = useState('');

  const body = {
    department : department,
    studentId : student,
    id : id,
    password : password,
    email : email,
    nickname : nickname,
  };

  // 회원가입 버튼 클릭했을때 실행될 이벤트
  const onClickJoinButton = (e) => {
    console.log('회원가입 버튼이 클릭되었습니다.');
      axios
      .post('http://43.200.157.167:3000/user/new', body)
      .then((res) => {
        console.log(res);
      })
      .catch();
    e.preventDefault();
  };

  return (
    <Box>
      <Join_Box>
      <Join_header>회원가입</Join_header>
      <Join_form>
        <Join_input 
          type="text" 
          placeholder="닉네임을 입력해주세요"
          name="nickname"
          value={nickname}
          onChange={(e)=>{setNickname(e.target.value);}}>
        </Join_input>
        <Join_input
          type="text"
          placeholder="아이디를 입력해주세요"
          name="id"
          value={id}
          onChange={(e)=>{setId(e.target.value);}}>
        </Join_input>
        <Join_input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}>
        </Join_input>
        <Join_input
          type="text"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}>
        </Join_input>
        <Join_input 
          type="text" 
          placeholder="학번을 입력해주세요"
          name="student_id"
          value={student}
          onChange={(e)=>{setStudent(e.target.value)}}>
        </Join_input>
        <Join_input 
          type="text" 
          placeholder="학과를 입력해주세요"
          name="depart"
          value={department}
          onChange={(e)=>{setDepartment(e.target.value)}}>
        </Join_input>
        <Join_button onClick={onClickJoinButton}>JOIN</Join_button>
        <Join_toLogin>로그인 페이지로 이동</Join_toLogin>
      </Join_form>
      </Join_Box>
    </Box>
  );
}

export default Joinform;
