import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BackTitle from '../../comps/BackTitle';

import AddImage from '../../comps/AddImage';
import Listing from '../../comps/Listing';
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

const link = "https://images-na.ssl-images-amazon.com/images/I/71ZxpODh1iL._AC_SL1024_.jpg"

const Info = () => {
    return <div>
        <BackTitle text="Info"></BackTitle>
        <Content>
            <Listing Desc="This is a test to see if there is any overflow of the text this is a test this is a test" img={"url("+link+")"}></Listing>
            <RadioInput></RadioInput>
            <ButtonContainer>
            <Buttons text="Add to List"></Buttons>
            </ButtonContainer>
        </Content>
    </div>
}

export default Info;