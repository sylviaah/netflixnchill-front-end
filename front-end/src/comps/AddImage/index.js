import React from 'react';
import styled from 'styled-components';

const camera = "https://www.flaticon.com/svg/vstatic/svg/685/685655.svg?token=exp=1612318324~hmac=33afaf6e70f7cac250e63d63e6d487df"

const Container = styled.div`
display:flex;
align-items:center;
width:120px;
`;

const AddImageText = styled.div`
    font-weight:bold;
    margin-left:5px;
`;

const IconBox = styled.img`
 max-width:30px;
`

const AddImage = ({text}) => {
    return <Container>
        <IconBox src={camera}></IconBox>
        <AddImageText>{text}</AddImageText>
    </Container>
}

AddImage.defaultProps = {
    text:"Add Image"
}

export default AddImage;