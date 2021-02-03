import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const back = "https://www.flaticon.com/svg/vstatic/svg/130/130882.svg?token=exp=1612318674~hmac=b8e5fd2256ceb3a0ed510cb2b1fbe76d"

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