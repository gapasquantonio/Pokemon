import React from "react";
import styled from "styled-components";

function ProgressBar({ title, width, text }) {
  const num = width + "%";
  return (
    <ProgressBarStyled>
      <H3>{title}</H3>
      <div className="progress">
        <span style={{ width: num }}></span>
      </div>
      <H3 className="progress-bar">{text}</H3>
    </ProgressBarStyled>
  );
}

const ProgressBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 65px;
  @media (max-width: 768px) {
      margin-left: 5px;
    }
  .progress {
    position: relative;
    width: 100%;

    border-color: #040714;
    border-style: solid;
    border-width: 3px;
    background-color: red;

    @media (max-width: 768px) {
      width: 260px;margin-left: 65px;
    }
    @media (min-width: 769px) and (max-width: 2000px) {
      width: 1700px;
    }
    span {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 100%;
      max-width: 100%;

      height: 0.6rem;
      background-color: #057FFF;
      border-color: white;
    }
  }
`;
const H3 = styled.h3`
 @media (max-width: 768px) {
      width: 100px;
      font-size: 13px;
      line-height: 1.08;
    }
    @media (min-width: 769px) and (max-width: 2000px) {
      width: 1700px;
      font-size: 13px;
      line-height: 1.08;
    }
  color: #040714;
  font-size: 33px;
  letter-spacing: .2px;
  line-height:  2.08;
  padding: 2px;
  position: relative;
  opacity: 1;
  margin: 3px;
height: auto;
  //padding-right: 1.1rem;
  width: 200px;
`;
export default ProgressBar;
