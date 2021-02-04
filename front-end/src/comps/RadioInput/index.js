import React,{useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
margin-top:100px;
`;

const Button = styled.div`
margin-bottom:20px;
`;

const Input = styled.input`
:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -2px;
    left: -2px;
    position: relative;
    background-color: #F8F4F4;
    content: '';
    display: inline-block;
    visibility: visible;
    margin-right:20px;
    box-shadow: 0px 0.5px 5px 1px rgba(0, 0, 0, 0.15);
}
:checked:after {
    width: 12px;
    height: 12px;
    border-radius: 15px;
    top: -2px;
    left: -2px;
    position: relative;
    background-color: #FA6E5A;
    content: '';
    display: inline-block;
    visibility: visible;
    margin-right:20px;
    border:solid #F8F4F4 5px;
    box-shadow: 0px 0.5px 5px 1px rgba(0, 0, 0, 0.15);
}
`;

const Text = styled.label`
margin-left:15px;
`;

const RadioInput = () => {
    const [focusedRadio, setFocusedRadio] = useState(0);


    return<Container>
    <Button>
        <Input type="radio" id="Planning" name="status" value="Planning"/>
        <Text for="Planning">Planning to watch</Text>
    </Button>
    <Button>
        <Input type="radio" id="Currently" name="status" value="Currently"/>
        <Text for="Currently">Currently watching</Text>
    </Button>
    <Button>
        <Input type="radio" id="Done" name="status" value="Done"/>
        <Text for="Done">Done watching</Text>
    </Button>
    </Container>
}

export default RadioInput;