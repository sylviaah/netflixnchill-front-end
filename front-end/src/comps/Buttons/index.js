import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
    width:262px;
    height:48px;
    background-color: #FA6E5A;
    border-radius:37px;
    border:none;
    outline:none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const ButtonText = styled.div`
    color:#FFF;
    font-weight:bold;
`

const Buttons = ({text}) =>{
    return <ButtonBox>
        <ButtonText> {text} </ButtonText>
    </ButtonBox> 
}

Buttons.defaultProps={
    text:"default",
}

export default Buttons;