import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
`;

const TextInput = styled.input`
width:310px;
height:35px;
margin-top:5px;
margin-bottom:15px;
outline:none;
background-color:#F2F2F2;
border:none;
border-radius:5px;
padding-left:10px;
box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
`;

const TextField = styled.textarea`
width:310px;
height:69px;
outline:none;
margin-top:5px;
resize:none;
background-color:#F2F2F2;
border:none;
border-radius:5px;
padding-left:10px;
box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
`;

const Title = styled.text`
font-weight:bold;
font-size: 16px;
`;


const Inputs = ({title1, title2, placeholder}) => {
    return<Container>
        <Title>{title1}</Title>
        <TextInput type='text' placeholder={placeholder}/>
        <Title>{title2}</Title>
        <TextField type='text' placeholder={placeholder}/>
    </Container>
}

Inputs.defaultProps = {
    placeholder:"Type something here..."
}

export default Inputs;