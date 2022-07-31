import "./style.css";
import { Link } from "react-router-dom";
import React from "react";
import Context from "../Context";

export default function BoughtTicket() {
  const [data] = React.useContext(Context);

  return (
    <div className="BoughtTicket">
      <div className="successes">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <div className="movieTicket">
        <h3>Filme e sessão</h3>
        <p>{data.hour.movie.title}</p>
        <p>
          {data.hour.day.weekday} {data.hour.name}
        </p>
      </div>
      <div className="ticket">
        <h3>Ingressos</h3>
        {data.seatName.map((seat, index) => (
          <p key={index}>assento {seat}</p>
        ))}
      </div>
      <div className="shopper">
        <h3>Comprador</h3>
        <p>Nome: {data.name}</p>
        <p>CPF: {data.cpf}</p>
      </div>
      <Link to={"/"}>
        <div className="buttonHome">
          <p>Voltar pra Home</p>
        </div>
      </Link>
    </div>
  );
}
