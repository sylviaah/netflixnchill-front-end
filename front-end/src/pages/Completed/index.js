import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Title from '../../comps/Title';
import Listing from '../../comps/Listing';
import AddButton from '../../comps/AddButton';
import NavBar from '../../comps/NavBar';

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

const PlanToWatch = () => {
    const [shows, setShows] = useState([]);

    const GetShows = async () => {
        var resp = await axios.get("http://localhost:8080/api/movies");
        var arr = resp.data.movies;
        setShows(arr);
    }

    useEffect(() => {
        GetShows()
      },[]);

    return <div>
        <Title title1="Completed"></Title>
        <ListContainer>
        {shows.map(o=>{

            if (o.status === 3){
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
    <Footer>
        <NavBar focused={3}></NavBar>
    </Footer>
        </div>
}

export default PlanToWatch;