import styled from "styled-components";
import React from "react";

export default function Seat({ children, color }) {
  const [selected, setSelected] = React.useState(false);

  return (
    <Container
      color={color}
      onClick={() => setSelected(!selected)}
      selected={selected}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 26px;
  height: 26px;
  background: ${(props) => (props.selected ? "#1aae9e" : "#c3cfd9")};
  border: 1px solid #7b8b99;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 15px;
`;
