import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Box = styled.div`
  display: grid;
  background: white;
  place-items: center;
  min-height: 100vh;
`;

const Login_Box = styled.div`
  width: 400px;
  background: #ffffff;
`;

const Login_header = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 30px;
`;

const Login_form = styled.form`
  position: relative;
  z-index: 1;
  max-width: 360px;
  margin: 0 auto 100px;
  text-align: center;
  padding: 20px 45px 45px 45px;
`;

const Login_input = styled.input`
  font-size: 14px;
  padding: 15px;
  //background: #f2f2f2;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  place-items: center;
  outline: none;
  border: 1px solid #999;
`;

const Login_button = styled.button`
  background: #47b5ff;
  width: 100%;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
`;

const Login_toJoin = styled.p`
  margin: 15px 0 0;
  color: #000000;
  font-size: 12px;
`;

function Loginform(props) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 입력한 id 값에 변화가 있을 때마다 input 폼의 value값을 변경
  const handleInputId = (e) => {
    setId(e.target.value);
  };

  // 입력한 pw 값에 변화가 있을 때마다 input 폼의 value값을 변경
  const handleInputPw = (e) => {
    setPw(e.target.value);
  };

  // 로그인 버튼 클릭했을때 실행될 이벤트
  const onClickLoginButton = (e) => {
    console.log("버튼이 클릭되었습니다.");
    axios
      .post("http://43.200.157.167:3000/user/login", { id, password: pw })
      .then((res) => {
        console.log(res);
      })
      .catch();
    e.preventDefault();
  };

  return (
    <Box>
      <Login_Box>
        <Login_header>로그인</Login_header>
        <Login_form>
          <Login_input
            type="text"
            placeholder="아이디를 입력해주세요"
            name="input_id"
            value={id}
            onChange={handleInputId}
          ></Login_input>
          <Login_input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="input_pw"
            value={pw}
            onChange={handleInputPw}
          ></Login_input>
          <Login_button onClick={onClickLoginButton}>LOGIN</Login_button>
          <Login_toJoin>회원가입 페이지로 이동</Login_toJoin>
        </Login_form>
      </Login_Box>
    </Box>
  );
}

export default Loginform;
