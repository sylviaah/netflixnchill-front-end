import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BackTitle from '../../comps/BackTitle';
import Title from '../../comps/Title';
import Listing from '../../comps/Listing';
import AddButton from '../../comps/AddButton';
import NavBar from '../../comps/NavBar';
import AddImage from '../../comps/AddImage';
import RadioInput from '../../comps/RadioInput';
import Buttons from '../../comps/Buttons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const ArrayofShows = require("../../fakeDB.json");

//   const { handle } = this.props.location.state.status;
//   console.log(handle);

const Content = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const ButtonContainer = styled.div`
position:fixed;
bottom:40px;
`;

const ListContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:100px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Info = () => {
    const [shows, setShows] = useState([]);
    const [selectedId, setSelected] = useState(null);

    const UpdateStatus = async(status)=>{
        if(selectedId === null){
            return false;
        }
        
    }

    const GetShows = async () => {
        setShows(ArrayofShows);
    }

    useEffect(() => {
        GetShows()
      },[]);

    return <div>
        <StyledLink to="/planning-to-watch"><BackTitle text="Info"></BackTitle></StyledLink>
        <ListContainer>
            <Listing onClick={(id)=>{setSelected(id); console.log("The selected id"+selectedId)}}></Listing>
        </ListContainer>
        <Content>
            <RadioInput></RadioInput>
        <ButtonContainer>
            <Buttons text="Save"></Buttons>
        </ButtonContainer>
        </Content>
        </div>
}

export default Info;