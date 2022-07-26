import styled from "styled-components";

export const View = styled.div`
  width: 100%;
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;

  p {
    margin-left: 15px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #293845;
  }
`;

export const Poster = styled.div`
  width: 64px;
  height: 89px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  img {
    width: 48px;
    height: 72px;
    object-fit: cover;
  }
`;
