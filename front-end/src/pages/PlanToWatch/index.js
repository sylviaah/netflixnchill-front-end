import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Title from '../../comps/Title';
import Listing from '../../comps/Listing';
import AddButton from '../../comps/AddButton';
import NavBar from '../../comps/NavBar';

const ArrayofShows = require("../../fakeDB.json");

const ListContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:100px;
`;

const Footer = styled.div`
position:fixed;
bottom:0;
`;

const Button = styled.div`
position:fixed;
right:20px;
bottom:120px;
`;

const PlanToWatch = () => {
    const [shows, setShows] = useState([]);

    const GetShows = async () => {
        setShows(ArrayofShows);
    }

    useEffect(() => {
        GetShows()
      },[]);

    return <div>
        <Title title1="Planning to Watch"></Title>
        <ListContainer>
        {shows.map(o=>{

            if (o.status === 1){
            return <div>
        <Listing
        link={"/info/"+o.id}
        onClick={(id)=>{
            console.log("The selected id is "+ id)
        }}
        Title={o.title}
        Desc={o.description}
        img={"url("+o.img+")"}
        id={o.id}
        />
        </div>
        } else {
            return
        }
    })}
    </ListContainer>
    <Button>
        <AddButton></AddButton>
    </Button>
    <Footer>
        <NavBar focused={1}></NavBar>
    </Footer>
        </div>
}

export default PlanToWatch;