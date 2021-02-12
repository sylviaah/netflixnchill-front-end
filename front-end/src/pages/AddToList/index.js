import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BackTitle from '../../comps/BackTitle';
import axios from 'axios';

import AddImage from '../../comps/AddImage';
import Inputs from '../../comps/Inputs';
import RadioInput from '../../comps/RadioInput';
import Buttons from '../../comps/Buttons';
import Form from '../../comps/Form';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Content = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const ButtonContainer = styled.div`
position:fixed;
bottom:40px;
`;

const AddToList = () => {
    const history = useHistory();

    const HandleFormComplete = async (title, description, link, checked) =>{
        console.log(checked);
        if (checked === 0){
            console.log("Please select a status")
        } else {
        var resp = await axios.post("http://localhost:8080/api/movies", {title:title, description:description, img:link, status:checked});
        console.log("create ", resp)
        
        if (checked === 1){
        history.push("/planning-to-watch")
        } else if (checked === 2){
            history.push("/watching")
        } else if (checked === 3){
            history.push("/completed")
        }
    }}

    return <div>
        <StyledLink to="/planning-to-watch"><BackTitle text="Add to List"></BackTitle></StyledLink>
        <Form onFormComplete={HandleFormComplete}></Form>
    </div>
}

export default AddToList;