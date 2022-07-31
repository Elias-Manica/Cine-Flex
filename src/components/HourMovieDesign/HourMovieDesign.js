import { View, Container, SquareDesign } from "./styles";
import { Link } from "react-router-dom";

export default function HourMovieDesign({ weekday, date, hour }) {
  return (
    <View>
      <h3>
        {weekday} - {date}
      </h3>
      <Container>
        {hour.map((value) => (
          <Link to={`/assentos/${value.id}`} key={value.id}>
            <SquareDesign key={value.id}>{value.name}</SquareDesign>
          </Link>
        ))}
      </Container>
    </View>
  );
}
