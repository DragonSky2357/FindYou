import styled from "styled-components";

const Box = styled.div`
    display: grid;
    background: white;
    place-items: center;
    min-height: 100vh;
`
// 로그인 폼과 헤더 h1을 포함하는 중앙 박스 컴포넌트
const ErrorPage = styled.h4`
    font-size: 20px;
`

function SearchError() {
    return(
        <Box>
            <ErrorPage>검색 결과가 없습니다.</ErrorPage>
        </Box>
    );
}

export default SearchError;