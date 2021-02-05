import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BackTitle from '../../comps/BackTitle';

import AddImage from '../../comps/AddImage';
import Inputs from '../../comps/Inputs';
import RadioInput from '../../comps/RadioInput';
import Buttons from '../../comps/Buttons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Content = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const ButtonContainer = styled.div`
position:fixed;
bottom:40px;
`;

const AddToList = () => {
    return <div>
        <StyledLink to="/planning-to-watch"><BackTitle text="Add to List"></BackTitle></StyledLink>
        <Content>
            <AddImage></AddImage>
            <Inputs title1="Title" title2="Description"></Inputs>
            <RadioInput></RadioInput>
            <ButtonContainer>
            <Buttons text="Add to List"></Buttons>
            </ButtonContainer>
        </Content>
    </div>
}

export default AddToList;