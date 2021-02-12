import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import back from './back.png';

const Container = styled.div`
display:flex;
align-items:center;
padding-left:20px;
padding-top:60px;
padding-bottom:40px;
`;

const Image = styled.img`
max-width:18px;
`;

const Text = styled.text`
font-size:30px;
font-weight:bold;
margin-left:10px;
`;

const BackTitle = ({text}) => {
    return <div>
        <Container>
        <Image src={back}></Image>
        <Text>{text}</Text>
        </Container>
    </div>
}

BackTitle.defaultProps = {
    text: "default text"
}

export default BackTitle;