import React, { useState } from 'react';
import styled from 'styled-components';


const NavWrapper = styled.div`
    width: 375px;
    height: 103px;
    background-color: #FFFFFF;
    align-items: center;
    display: flex;
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
  background-color: #FFFFFF 0%;
  border: none;
  color: #000000;
  border-radius: 43px;
`;

const NavBar = () => {
    return <NavWrapper>
        <NavBG>
            <NavItem>Planning</NavItem>
            <NavItem>Watching</NavItem>
            <NavItem>Complete</NavItem>
        </NavBG>
    </NavWrapper>
}

NavBar.defaultProps = {

}

export default NavBar;