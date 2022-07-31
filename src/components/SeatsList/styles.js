import styled from "styled-components";

export const View = styled.div`
  margin: 50px;
  margin-bottom: 140px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 67px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;

export const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const BuyerData = styled.div`
  margin-top: 30px;

  input {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
    width: 90%;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 10px;
  }

  input:-ms-input-placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #afafaf;
  }
`;

export const Tittle = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #293845;
`;

export const ButtonBuy = styled.button`
  width: 80%;
  height: 30px;
  background: #e8833a;
  border-radius: 3px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #ffffff;
`;
