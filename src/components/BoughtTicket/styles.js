import styled from "styled-components";

export const View = styled.div`
  margin-top: 70px;
  h3 {
    margin-top: 30px;
    margin-left: 30px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
  p {
    margin-top: 10px;
    margin-left: 30px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin-top: 30px;
    color: #247a6b;
  }
`;

export const ButtonHome = styled.button`
  width: 50%;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  margin: 50px auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  h6 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`;
