import { View, Container, SeatBusy, SeatAvaib, SeatUnAvaib } from "./styles";

export default function Subtitle() {
  return (
    <View>
      <Container>
        <SeatBusy></SeatBusy>
        <h6>Selecionado</h6>
      </Container>
      <Container>
        <SeatAvaib></SeatAvaib>
        <h6>Disponível</h6>
      </Container>
      <Container>
        <SeatUnAvaib></SeatUnAvaib>
        <h6>Indisponível</h6>
      </Container>
    </View>
  );
}
