import React from 'react';
import styled from 'styled-components';
import camera from "./camera.png";

const Container = styled.div`
align-items:center;
margin-top:40px;
`;

const IconBox = styled.img`
 max-width:30px;
 padding-right:7px;
`;

const Input = styled.input`
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

const TopContainer = styled.label`
width:120px;
display:flex;
align-items:center;
font-weight:bold;
`;

const AddImage = ({TheLink}) => {
    return <Container><TopContainer>
            <IconBox src={camera}></IconBox>
            Image
            </TopContainer>
            <Input placeholder="Paste URL here..." onChange={(e)=>{
            TheLink(e.target.value);
            }}></Input>
    </Container>
}

AddImage.defaultProps = {
    text:"Add Image"
}

export default AddImage;