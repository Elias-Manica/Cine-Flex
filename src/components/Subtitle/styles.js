import styled from "styled-components";

export const View = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h6 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;

export const SeatBusy = styled.div`
  width: 26px;
  height: 26px;
  background: #8dd7cf;
  border: 1px solid #1aae9e;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const SeatAvaib = styled.div`
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #7b8b99;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const SeatUnAvaib = styled.div`
  width: 26px;
  height: 26px;
  background: #fbe192;
  border: 1px solid #f7c52b;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;
