import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
`;

const TextInput = styled.input`
width:310px;
height:35px;
margin-top:15px;
margin-bottom:15px;
`;

const TextField = styled.input`
width:310px;
height:69px;
`;


const Inputs = ({text, placeholder}) => {
    return<Container>
        {text}
        <TextInput type='text' placeholder={placeholder}/>
        {text}
        <TextField type='text' placeholder={placeholder}/>
    </Container>
}

Inputs.defaultProps = {
    text:"Input",
    placeholder:"Type something here..."
}

export default Inputs;