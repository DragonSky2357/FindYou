import styled from "styled-components";

// 전체 화면 Grid 컴포넌트
const Box = styled.div`
    display: grid;
    background: white;
    place-items: center;
    min-height: 100vh;
`

const Join_Box = styled.div`
    width: 400px;
    background: #FFFFFF;
`

// '로그인' 텍스트 h1 컴포넌트
const Join_header = styled.h1`
    font-size: 24px;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 30px;
`

// 입력폼, 버튼을 포함하는 컴포넌트
const Join_form = styled.div`
    position: relative;
    z-index: 1;
    max-width: 360px;
    margin: 0 auto 100px;
    text-align: center;
    padding: 20px 45px 45px 45px;
`
// 아이디, 비밀번호를 입력하는 input 컴포넌트
const Join_input = styled.input`
    font-size: 14px;
    padding: 10px;
    background: #f2f2f2;
    background: #FFFFFF;
    border: none;
    border-bottom: 1px solid #999;
    width:  100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    place-items: center;
    outline: none;
`
// 로그인 버튼 컴포넌트
const Join_button = styled.button`
    background: #47B5FF;
    width: 100%;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
`
// 회원가입 페이지로 연결될 링크 컴포넌트
const Join_toLogin = styled.p`
    margin: 15px 0 0;
    color: #000000;
    font-size: 12px;
`

const Join_text = styled.p`
    text-align: left;
    margin-bottom: 0px;
    margin-top: 10px;
`

function Joinform() {
    return(
        <Box>
            <Join_header>회원가입</Join_header>
            <Join_form>
                <Join_input type="text" placeholder="닉네임 입력해주세요"></Join_input>
                <Join_input type="text" placeholder="아이디를 입력해주세요"></Join_input>
                <Join_input type="password" placeholder="비밀번호를 입력해주세요"></Join_input>
                <Join_input type="text" placeholder="이메일을 입력해주세요"></Join_input>
                <Join_input type="text" placeholder="전화번호를 입력해주세요"></Join_input>
                <Join_input type="text" placeholder="학번을 입력해주세요"></Join_input>
                <Join_input type="text" placeholder="학과를 입력해주세요"></Join_input>
                <Join_button>JOIN</Join_button>
                <Join_toLogin>로그인 페이지로 이동</Join_toLogin>
            </Join_form>
        </Box>
    );
}

export default Joinform;