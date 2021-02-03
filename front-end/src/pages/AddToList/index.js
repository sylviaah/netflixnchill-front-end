import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BackTitle from '../../comps/BackTitle';

import AddImage from '../../comps/AddImage';
import Inputs from '../../comps/Inputs';
import RadioInput from '../../comps/RadioInput';
import Buttons from '../../comps/Buttons';

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
        <BackTitle  text="Add to List"></BackTitle>
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