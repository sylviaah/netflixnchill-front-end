import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
padding-left:20px;
padding-top:60px;
padding-bottom:60px;
`;

const Title1 = styled.text`
font-size:30px;
font-weight:bold;
`;

const Title = ({title1}) => {
    return <div>
        <TitleContainer>
        <Title1>{title1}</Title1>
        </TitleContainer>
    </div>
}

Title.defaultProps = {
    title1: "text 1",
}

export default Title;