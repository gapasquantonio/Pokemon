import React from 'react'
import styled from "styled-components";


function Footer() {
    return (
        <Nav>
           2021 - React Project - All Rights Reserved
        </Nav>
    )
}
const Nav = styled.nav`
  //padding-top:200px;
  @media (max-width: 768px) {
    position:relative;
  bottom: -100px;
  } 
  @media (min-width: 769px) and (max-width: 2000px) {
    position:relative;
  bottom: -100px;
  } 

  position:relative;
  bottom: -100px;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  
  z-index: 3;
`;
export default Footer
