import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const NavWrapper = styled.div`
    width: 375px;
    height: 103px;
    background-color: #FFFFFF;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px -1px 10px 1px rgba(0, 0, 0, 0.2);
`;

const NavBG = styled.div`
  width: 343px;
  height: 50px;
  background-color: #F2F2F2;
  border-radius: 43px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.button`
  width: 101px;
  height:44px;
  border: none;
  color: #000000;
  font-weight: bold;
  border-radius: 43px;
  outline:none;
`;

const NavBreak = styled.div`
  width: 143px;
  height: 5px;
  background-color: #E6E6E6;
  border-radius: 43px;
  margin: 10px;
`;



const NavBar = ({focused, setFocus, tabName, coloured}) => {
    const [focusedTab, setFocusedTab] = useState(0);
   
    /*function setFocusedTab(tab) {
        setFocus(tab)
    }*/

    const pageNumber = () => {
      setFocusedTab(focused);
    }

    useEffect(() => {
      pageNumber();
  },[]);

    return <NavWrapper>
        <NavBG>
            <Link to="/planning-to-watch">
              <NavItem style={{backgroundColor: focusedTab == 1 ? "#FFFFFF" : "#F2F2F2", color: focusedTab == 1 ? "#FA6E5A" : "#000000"}} onClick={() => {
                setFocusedTab(1)
                }}>Planning</NavItem>
            </Link>
            <Link to="/watching">
              <NavItem style={{backgroundColor: focusedTab == 2 ? "#FFFFFF" : "#F2F2F2", color: focusedTab == 2 ? "#FA6E5A" : "#000000"}} onClick={() => {setFocusedTab(2)}}>Watching</NavItem>
            </Link>
            <Link to="/completed">
              <NavItem style={{backgroundColor: focusedTab == 3 ? "#FFFFFF" : "#F2F2F2", color: focusedTab == 3 ? "#FA6E5A" : "#000000"}} onClick={() => {setFocusedTab(3)}}>Complete</NavItem>
            </Link>
        </NavBG>
        <NavBreak/>
    </NavWrapper>
}

NavBar.defaultProps = {

}

export default NavBar;