import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
padding-left:20px;
padding-top:60px;
padding-bottom:40px;
`;

const Title1 = styled.text`
font-size:30px;
font-weight:bold;
`;

const Title2 = styled.text`
font-size:30px;
`;

const Title = ({title1, title2}) => {
    return <div>
        <TitleContainer>
        <Title1>{title1}</Title1><br/>
        <Title2>{title2}</Title2>
        </TitleContainer>
    </div>
}

Title.defaultProps = {
    title1: "text 1",
    title2: "text 2"
}

export default Title;