import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Title from '../../comps/Title';
import Listing from '../../comps/Listing';
import AddButton from '../../comps/AddButton';
import NavBar from '../../comps/NavBar';

const ListContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:100px;
`;

const Footer = styled.div`
position:fixed;
bottom:0;
`;

const link = "https://images-na.ssl-images-amazon.com/images/I/71ZxpODh1iL._AC_SL1024_.jpg"

const PlanToWatch = () => {
    return <div>
        
        <Title title1="What you have" title2="Completed"></Title>
        <ListContainer>
        <Listing Desc="This is a test to see if there is any overflow of the text this is a test this is a test" img={"url("+link+")"}></Listing>
        <Listing ></Listing>
        <Listing></Listing>
        <Listing></Listing>
        <Listing></Listing>
        </ListContainer>
        
        <Footer>
        <NavBar></NavBar>
        </Footer>
        
        </div>
}

export default PlanToWatch;