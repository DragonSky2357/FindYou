import React from "react"
import { AiOutlineSearch } from 'react-icons/ai';
import styled from "styled-components";

const ContainerSearch = styled.div`
    padding: 50px;
    display: flex;
    grid-auto-rows: 75px;
    grid-gap: 0px 0px;
    justify-content: center;
    box-sizing: border-box;
`

const SpanContainer = styled.span`
    border: solid 4px #47B5FF;
`

const SpanInput = styled.input`
    width: 600px;
      padding: 15px 15px;
    font-size: 30px;
    outline: none;
    border: none;
    &input::placeholder{
    color: rgb(95, 92, 92);
    font-size: 30px;
  }
`

const SpanButton = styled.button`
    width: 70px;
    height: 70px;
    font-size: 30px;
    background-color: #47B5FF;
    border: none;
    cursor: pointer;
`


function Search() {

    return(
        <ContainerSearch>
            <SpanContainer>
                <SpanInput placeholder='검색어를 입력하세요.'></SpanInput>
                <SpanButton className='spanButton'><AiOutlineSearch/></SpanButton>
            </SpanContainer>
        </ContainerSearch>
    )
}

export default Search;

  