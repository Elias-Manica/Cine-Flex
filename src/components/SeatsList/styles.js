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
  width: 50%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1262px) {
    width: 55%;
  }
  @media (max-width: 1154px) {
    width: 58%;
  }
  @media (max-width: 1099px) {
    width: 60%;
  }
  @media (max-width: 1063px) {
    width: 65%;
  }
  @media (max-width: 993px) {
    width: 70%;
  }
  @media (max-width: 927px) {
    width: 72%;
  }
  @media (max-width: 904px) {
    width: 75%;
  }
  @media (max-width: 872px) {
    width: 80%;
  }
  @media (max-width: 823px) {
    width: 85%;
  }
  @media (max-width: 781px) {
    width: 90%;
  }
  @media (max-width: 742px) {
    width: 95%;
  }
  @media (max-width: 708px) {
    width: 100%;
  }
  @media (max-width: 664px) {
    display: grid;
    grid-template-columns: repeat(10, 10%);
  }
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
