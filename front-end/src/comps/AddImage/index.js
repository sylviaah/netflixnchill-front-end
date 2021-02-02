import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const AddImageText = styled.div`
    font-weight:bold;
`;

const IconBox = styled.div`
    
`

const AddImage = ({text}) => {
    return <Container>
        <IconBox></IconBox>
        <AddImageText>{text}</AddImageText>
    </Container>
}

AddImage.defaultProps = {
    text:"Add Image"
}

export default AddImage;