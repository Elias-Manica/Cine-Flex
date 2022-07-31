import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Topo() {
  return (
    <>
      <Link to={"/"}>
        <Container>
          <h1>CINEFLEX</h1>
        </Container>
      </Link>
    </>
  );
}
