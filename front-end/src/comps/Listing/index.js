import React from 'react';
import styled from 'styled-components';


const ListWrapper = styled.div`
    width: 336px;
    height: 194px;
    display: flex;
    margin-bottom:20px;
`;

const ImgContainer = styled.div`
    min-width:134px;
    max-width: 134px;
    height: 194px;
    background-color: #333333;
    background-image:${props=>props.img ? props.img : "url()"};
    filter: drop-shadow(4px 5px 12px rgba(0, 0, 0, 0.15));
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
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

const Listing = ({Title, Desc, img}) => {
    return <ListWrapper>
        <ImgContainer img={img}/>
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