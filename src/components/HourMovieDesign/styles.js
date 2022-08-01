import styled from "styled-components";

export const View = styled.div`
  margin-left: 30px;
  h3 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
  }
`;

export const Container = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const SquareDesign = styled.div`
  height: 43px;
  width: 80px;
  background: #e8833a;
  border-radius: 3px;
  margin: 30px 30px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
