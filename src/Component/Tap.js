import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const TapContainer = styled.ul`
    display: flex;
    list-style: none;
    padding: 3%;
    justify-content: center;
`

const TapItem = styled.li`
    font-size: 25px;
    margin: 10px;
    padding: 10px;
    &:hover {
        background-color: #9bd6fe;
    }
`

function Tap() {
    const [tapCheck, setTapCheck] = useState(false);

    const CheckState = () => {
        setTapCheck(!tapCheck);
    }

    return (
        <TapContainer>
            <TapItem>
                <Link to="/" style={ tapCheck ? {textDecorationLine:"underline", textDecorationThickness:"5px", color:"#47B5FF", fontWeight:"bold"} : {textDecorationLine:"none", color:"#47B5FF", fontWeight:"bold"}} onClick={{CheckState}}>분실물</Link>
            </TapItem>
            <TapItem>
                <Link to="/GapLectOrNoLect" style={ tapCheck ? {textDecorationLine:"underline", textDecorationThickness:"5px", color:"#47B5FF", fontWeight:"bold"} : {textDecorationLine:"none", color:"#47B5FF", fontWeight:"bold"}} onClick={{CheckState}}>공강 시간표 만들기</Link>
            </TapItem>
            <TapItem>
                <Link to="/DeliverTogether" style={ tapCheck ? {textDecorationLine:"underline", textDecorationThickness:"5px", color:"#47B5FF", fontWeight:"bold"} : {textDecorationLine:"none", color:"#47B5FF", fontWeight:"bold"}} onClick={{CheckState}}>배달 같이 시킬래?</Link>
            </TapItem>
        </TapContainer>
    )
}

export default Tap;
