import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import './Tap.css'

function Tap() {
  const [tapItembackgroundColor, setTapItembackgroundColor] = useState('');

  const setbackgroundColor = () => {

  }

  return (
    <div>
      <ul className='tap-container'>
        <li>
          <Link to="/" className='tap-item' onClick={{setbackgroundColor}}>분실물</Link>
        </li>
        <li>
          <Link to="/GapLectOrNoLect" className='tap-item' onClick={{setbackgroundColor}}>공강 시간표 만들기</Link>
        </li>
        <li>
          <Link to="/DeliverTogether" className='tap-item' onClick={{setbackgroundColor}}>배달 같이 시킬래?</Link>
        </li>
      </ul>
    </div>
  );
}

export default Tap;