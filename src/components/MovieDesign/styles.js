import styled from "styled-components";

export const Container = styled.div`
  width: 145px;
  height: 230px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.2s;

  p {
    text-align: center;
  }

  img {
    width: 129px;
    height: 193px;
    object-fit: cover;
  }
`;
