import { View, Container, ButtonHome } from "./styles";
import { Link } from "react-router-dom";
import React from "react";
import Context from "../Context";

export default function BoughtTicket() {
  const [data] = React.useContext(Context);

  return (
    <View>
      <Container>
        <h2>Pedido feito com sucesso!</h2>
      </Container>
      <div>
        <h3>Filme e sessão</h3>
        <p>{data.hour.movie.title}</p>
        <p>
          {data.hour.day.weekday} {data.hour.name}
        </p>
      </div>
      <div>
        <h3>Ingressos</h3>
        {data.seatName.map((seat, index) => (
          <p key={index}>assento {seat}</p>
        ))}
      </div>
      <div>
        <h3>Comprador</h3>
        <p>Nome: {data.name}</p>
        <p>CPF: {data.cpf}</p>
      </div>
      <Link to={"/"}>
        <ButtonHome>
          <h6>Voltar pra Home</h6>
        </ButtonHome>
      </Link>
    </View>
  );
}
