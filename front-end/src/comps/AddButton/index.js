import React from 'react';
import styled from 'styled-components';


const ButtonBox = styled.button`
    width: 64px;
    height: 64px;
    border-radius: 100%;
    background: #FA6E5A;
    text-align: center;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #FFFFFF;
    font-size: 48px;
    outline:none;
`;


const AddButton = () => {
    return <ButtonBox>+</ButtonBox>
}

AddButton.defaultProps = {

}

export default AddButton;