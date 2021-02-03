import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
margin-top:40px;
`;

const Select = styled.div`
margin-right:15px;
margin-top:10px;
margin-bottom:10px;
display:inline-flex;
width:10px;
height:10px;
border: 2px solid #d8e4e2;
border-radius:50%;
padding:3px;

&::after{
    content:"";
    height:100%;
    width:100%;
    display:block;
    background-color:#FA6E5A;
    border-radius:50%;

    transform:scale(0);

}

&:checked + &::after {
    transform:scale(1);
}

`;

const RadioInput = () => {

    return<Container>
        <div>
        <Select id='plan' name='choose'/>
        <label for='plan'>Planning to watch</label>
        </div>
        
        <div>
        <Select id='plan' name='choose'/>
        <label for='watching'>Currently watching</label>
        </div>

        <div>
        <Select id='plan' name='choose'/>
        <label for='done'>Done watching</label>
        </div>
        

    </Container>
}

export default RadioInput;