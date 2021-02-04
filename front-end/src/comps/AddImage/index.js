import React from 'react';
import styled from 'styled-components';

const camera = "https://www.flaticon.com/svg/vstatic/svg/685/685655.svg?token=exp=1612318324~hmac=33afaf6e70f7cac250e63d63e6d487df"

const Container = styled.div`
display:flex;
align-items:center;
width:120px;
`;

const IconBox = styled.img`
 max-width:30px;
 padding-right:7px;
`;

const HiddenInput = styled.input`
display:none;
`;

const InputContainer = styled.label`
width:120px;
display:flex;
align-items:center;
font-weight:bold;
`;

const AddImage = ({text}) => {
    return <Container>
        <InputContainer>
            <IconBox src={camera}></IconBox>
            <HiddenInput type="file" accept="image/*"></HiddenInput>
            Add Image
        </InputContainer>
    </Container>
}

AddImage.defaultProps = {
    text:"Add Image"
}

export default AddImage;