import React from 'react';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import './Home.css';
import Tap from 'C:/Users/gudwl/OneDrive/바탕 화면/FindYou-Jeong-Hyungjin/FrontEnd/src/Component/Tap.js';
import snow from './snow.jpg';
import { AiOutlineSearch } from 'react-icons/ai';

function Home() {
    const [posts, setPosts] = useState([]);

    /*useEffect(() => {
        fetch("")
        .then((res) => res.json)
        .then((data) => setPosts(data));
    })*/

    return(
        <div>
            <div className='ContainerSearch'>
                <span className='spanContainer'>
                    <input className='spanInput' placeholder='검색어를 입력하세요.'/>
                    <button className='spanButton'><AiOutlineSearch/></button>
                </span>
            </div>
            <div>
                <Tap></Tap>
            </div>
            <div className='ContainerPost'>
                <div className='post'>
                    <div className='image'>
                        <img className='imageState' src={snow}/>
                    </div>
                    <div className='title' >제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                    <div className='text'>
                        <div className='line-clamp'>
                            내용제목제목제목제목제목제목제목제목제목제목제목;내용제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제splay: blolock;
                        </div>
                    </div>
                    <div className='DateWritLoca'>
                        <span>습득 위치: <br/>작성일: 2022.10.11 작성자: 사용자</span>
                    </div>
                </div>
                <div className='post'>
                    <div className='image'></div>
                    <div className='title'></div>
                    <div className='text'></div>
                    <div className='DateWritLoca'></div>
                </div>
                <div className='post'>
                    <div className='image'></div>
                    <div className='title'></div>
                    <div className='text'></div>
                    <div className='DateWritLoca'></div>
                </div>
                <div className='post'>
                    <div className='image'></div>
                    <div className='title'></div>
                    <div className='text'></div>
                    <div className='DateWritLoca'></div>
                </div>
                <div className='post'>
                    <div className='image'></div>
                    <div className='title'></div>
                    <div className='text'></div>
                    <div className='DateWritLoca'></div>
                </div>
            </div>
        </div>
    )
}

export default Home;