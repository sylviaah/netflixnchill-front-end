import React from 'react';
import styled from 'styled-components';


const ListWrapper = styled.div`
    width: 100;
    
`;

const ImgContainer = styled.div``;

const TextContainer = styled.div``;

const ListTitle = styled.div``;

const ListDesc = styled.div``;

const Listing = () => {
    return <ListWrapper>
        <ImgContainer/>
        <TextContainer>
            <ListTitle>ListTitle</ListTitle>
            <ListDesc>ListDesc</ListDesc>
        </TextContainer>
    </ListWrapper>
}

Listing.defaultProps = {

}

export default Listing;