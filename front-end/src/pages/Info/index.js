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
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams
  } from "react-router-dom";

//   const { handle } = this.props.location.state.status;
//   console.log(handle);

const Content = styled.div`
display:flex;
flex-direction:column;
align-items:center;
align-content:space-between;

`;

const Margin1 = styled.div`
margin-bottom:70px;
`;

const Margin2 = styled.div`
margin-bottom:20px;
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
    const params = useParams();
    var currentID = params.id;
    const history = useHistory();

    const [info, setInfo] = useState({});
    const [checked, setChecked] = useState(0);

    const GetInfo = async () => {
        var resp = await axios.get("http://localhost:8080/api/movies/"+currentID);
        var arr = resp.data.movies;
        console.log(arr);
        setInfo({...arr[0]});
        console.log("the status "+arr[0].status)
    }

    const HandleFormComplete = async () =>{
        console.log("the current id "+currentID);
        var resp = await axios.patch("http://localhost:8080/api/movies/"+currentID, {status: checked});

        if (checked === 0){
            console.log("Please select a status")
        } else {
            console.log(checked)
        if (checked === 1){
            history.push("/planning-to-watch")
        } else if (checked === 2){
            history.push("/watching")
        } else if (checked === 3){
            history.push("/completed")
        }
    }}

    const HandleFormDelete = async () =>{
        var resp = await axios.delete("http://localhost:8080/api/movies/"+currentID);
        history.push("/planning-to-watch")
    }

    const Handle1 = () =>{
        setChecked(1)
    }
    const Handle2 = () =>{
        setChecked(2)
    }
    const Handle3 = () =>{
        setChecked(3)
    }

    useEffect(() => {
        GetInfo()
      },[]);

    return <div>
        <StyledLink to="/planning-to-watch"><BackTitle text="Info"></BackTitle></StyledLink>
        <ListContainer>
            <Listing
            Title={info.title}
            Desc={info.description}
            img={"url("+info.img+")"}
            id={info.id}
            />
        </ListContainer>
        <Content>
            <RadioInput
            check1={Handle1}
            check2={Handle2}
            check3={Handle3}
            />
            <Margin1/>
            <Buttons text="Delete" onClick={HandleFormDelete}></Buttons>
            <Margin2/>
            <Buttons text="Save" onClick={HandleFormComplete}></Buttons>

        </Content>
        </div>
}

export default Info;