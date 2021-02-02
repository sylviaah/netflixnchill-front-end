import React from 'react';
import styled from 'styled-components';


const ListWrapper = styled.div`
    width: 336px;
    height: 194px;
    display: flex;
`;

const ImgContainer = styled.div`
    width: 134px;
    height: 194px;
    background-color: #333333;
    background-image: url();
    filter: drop-shadow(4px 5px 12px rgba(0, 0, 0, 0.15));
    border-radius: 10px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:
    max-height: 194px;
    margin-left: 24px;
`;

const ListTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
`;

const ListDesc = styled.div`
    font-size: 12px;
    color: #C1C1C1;
`;

const Listing = ({Title, Desc}) => {
    return <ListWrapper>
        <ImgContainer/>
        <TextContainer>
            <ListTitle>{Title}</ListTitle>
            <ListDesc>{Desc}</ListDesc>
        </TextContainer>
    </ListWrapper>
}

Listing.defaultProps = {
    Title: 'Haikyuu',
    Desc: 'Add a note...'
}

export default Listing;