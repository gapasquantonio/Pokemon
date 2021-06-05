import React from 'react'
import styled from 'styled-components'
import { LeftArrow, RightArrow } from "./Arrows";

function Pagination(props) {
    const {onLeftClick, onRightClick, page, totalPages}= props;
    return (
        <Paginationn>
            <Button onClick={onLeftClick}><LeftArrow /></Button>
            <div>{page} de {totalPages}</div>
            <Button onClick={onRightClick}><RightArrow /></Button>
        </Paginationn>
    )
}



const Paginationn = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const Button = styled.button`
background-color: #363636;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


export default Pagination
