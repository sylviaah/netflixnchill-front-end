import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Title from '../../comps/Title';
import Listing from '../../comps/Listing';
import AddButton from '../../comps/AddButton';
import NavBar from '../../comps/NavBar';

const ArrayofShows = require("../../fakeDB.json");

const TestPage = () => {

    const [shows, setShows] = useState([]);

    const GetShows = async () => {
        setShows(ArrayofShows);
        console.log(ArrayofShows)
        console.log("The img "+ ArrayofShows[1].img)
    }

    useEffect(() => {
        GetShows()
      },[]);

    return <div>
        {shows.map(o=>{

            if (o.status === 1){
            return <div>
        <Listing Title={o.title} Desc={o.description} img={"url("+o.img+")"}></Listing>
        </div>
        } else {
            return
        }
    })}
        </div>
}

export default TestPage;