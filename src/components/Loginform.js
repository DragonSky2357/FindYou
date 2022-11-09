import styled from "styled-components";

// 전체 화면 Grid 컴포넌트
const Box = styled.div`
    display: grid;
    background: white;
    place-items: center;
    min-height: 100vh;
`
// 로그인 폼과 헤더 h1을 포함하는 중앙 박스 컴포넌트
const Login_Box = styled.div`
    width: 400px;
    background: #FFFFFF;
`

// '로그인' 텍스트 h1 컴포넌트
const Login_header = styled.h1`
    font-size: 24px;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 30px;
`
// 입력폼, 버튼을 포함하는 컴포넌트
const Login_form = styled.div`
    position: relative;
    z-index: 1;
    max-width: 360px;
    margin: 0 auto 100px;
    text-align: center;
    padding: 20px 45px 45px 45px;
`
// 아이디, 비밀번호를 입력하는 input 컴포넌트
const Login_input = styled.input`
    font-size: 14px;
    padding: 15px;
    background: #f2f2f2;
    width:  100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    place-items: center;
    outline: none;
`
// 로그인 버튼 컴포넌트
const Login_button = styled.button`
    background: #47B5FF;
    width: 100%;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;

`
// 회원가입 페이지로 연결될 링크 컴포넌트
const Login_toJoin = styled.p`
    margin: 15px 0 0;
    color: #000000;
    font-size: 12px;
`

function Loginform() {
    return(
        <Box>
            {/* <Login_header>로그인</Login_header> */}
            <Login_Box>
                <Login_header>로그인</Login_header>
                <Login_form>
                    <Login_input type="text" placeholder="아이디를 입력해주세요"></Login_input>
                    <Login_input type="password" placeholder="비밀번호를 입력해주세요"></Login_input>
                    <Login_button>LOGIN</Login_button>
                    <Login_toJoin>회원가입 페이지로 이동</Login_toJoin>
                </Login_form>
            </Login_Box>
        </Box>
    );
}

export default Loginform;