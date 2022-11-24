import React from 'react';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import snow from './snow.jpg';


const ContainerPost = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 400px);
    grid-template-rows: repeat(5, 500px);
    grid-auto-rows: 100px;
    grid-gap: 100px 100px;
    justify-content: center;
    box-sizing: border-box;
`

const Post = styled.div`
    border: solid 4px #47B5FF;
    border-radius: 10px;
    background-color: #ffffff;
`
const Image = styled.div`
    height: 50%;
    display: flex;
    outline: cover;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-bottom: solid 3px #47B5FF;
`

const ImageState = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 2%;
`

const Title = styled.div`
    display: block;
  
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    height: 10%;
    margin: 20px;
    font-size: 25px;
    font-weight: 500;
    background-color: #ffffff;
`

const Text = styled.div`
    text-overflow: ellipsis;
    display: block;
  
    height: 13%;
    justify-content: left;
    align-items: left;
    margin: 20px;
    font-size: 18px;
    font-weight: 400;
    background-color: #fefefe;
`
const LineClamp = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
     overflow: hidden;
`

const DateWritLoca = styled.div`
    height: 14%;
    display: flex;
    font-weight: 500;
    font-size: 20px;
    border-top: solid 3px #47B5FF;
`

function Home() {
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        axios.get('http://43.200.157.167:3000/posts')
            .then(res => {
                setData(res.data);
            })
    })

    return(
            <ContainerPost>
                <Post>
                    <Image>
                        <ImageState src={snow}/>
                    </Image>
                    <Title>제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</Title>
                    <Text>
                        <LineClamp>
                            내용제목제목제목제목제목제목제목제목제목제목제목;내용제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제splay: blolock;
                        </LineClamp>
                    </Text>
                    <DateWritLoca>
                        <span>습득 위치: <br/>작성일: 2022.10.11 작성자: {data.map(data => <span key={data.id}>{data.id}</span>)}</span>
                    </DateWritLoca>
                </Post>
                <Post>
                    <Image></Image>
                    <Title>{data.map(data => <span key={data.id}>{data.title}</span>)}</Title>
                    <Text>
                        <LineClamp>
                            {data.map(data => <span key={data.id}>{data.body}</span>)}
                        </LineClamp>
                    </Text>
                    <DateWritLoca></DateWritLoca>
                </Post>
                <Post>
                    <Image></Image>
                    <Title>
                        <LineClamp>
                            
                        </LineClamp>
                    </Title>
                    <Text></Text>
                    <DateWritLoca></DateWritLoca>
                </Post>
                <Post>
                    <Image></Image>
                    <Title>
                        <LineClamp>
                            
                        </LineClamp>
                    </Title>
                    <Text></Text>
                    <DateWritLoca></DateWritLoca>
                </Post>
                <Post>
                    <Image></Image>
                    <Title>
                        <LineClamp>
                            
                        </LineClamp>
                    </Title>
                    <Text></Text>
                    <DateWritLoca></DateWritLoca>
                </Post>
            </ContainerPost>
    )
}

export default Home;

