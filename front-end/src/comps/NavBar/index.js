import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const NavWrapper = styled.div`
    width: 375px;
    height: 103px;
    background-color: #FFFFFF;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`;

const NavBreak = styled.div`
  width: 143px;
  height: 5px;
  background-color: #E6E6E6;
  border-radius: 43px;
  margin: 10px;
`;



const NavBar = ({focused, setFocus, tabName}) => {
    const [focusedTab, setFocusedTab] = useState(0);
    /*function setFocusedTab(tab) {
        setFocus(tab)
    }*/

    console.log (focusedTab)
    return <NavWrapper>
        <NavBG>
            <NavItem style={{backgroundColor: focusedTab == 1 ? "#FFFFFF" : "#F2F2F2"}} onClick={() => {setFocusedTab(1)}}>Planning</NavItem>
            <NavItem style={{backgroundColor: focusedTab == 2 ? "#FFFFFF" : "#F2F2F2"}} onClick={() => {setFocusedTab(2)}}>Watching</NavItem>
            <NavItem style={{backgroundColor: focusedTab == 3 ? "#FFFFFF " : "#F2F2F2"}} onClick={() => {setFocusedTab(3)}}>Complete</NavItem>
        </NavBG>
        <NavBreak/>
    </NavWrapper>
}

NavBar.defaultProps = {

}

export default NavBar;