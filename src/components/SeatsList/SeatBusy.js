import styled from "styled-components";

export default function SeatBusy({ children, color }) {
  return (
    <Container
      color={color}
      onClick={() => console.log("Esse assento não está disponível")}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 26px;
  height: 26px;
  background: ${(props) => props.color};
  border: 1px solid #7b8b99;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 15px;
`;
