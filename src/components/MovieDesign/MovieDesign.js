import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function MovieDesign({ unique, id, posterURL, title }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <Container>
        <img key={unique} src={posterURL} alt={title}></img>
        <p>{title}</p>
      </Container>
    </Link>
  );
}
