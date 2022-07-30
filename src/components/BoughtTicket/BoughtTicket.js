import "./style.css";
import { Link, useLocation } from "react-router-dom";

export default function BoughtTicket() {
  const location = useLocation();

  const ticket = location.state.name;

  console.log(location.state.name);

  return (
    <div className="BoughtTicket">
      <div className="successes">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <div className="movieTicket">
        <h3>Filme e sessão</h3>
        <p>{ticket.hour.movie.title}</p>
        <p>
          {ticket.hour.day.date} {ticket.hour.name}
        </p>
      </div>
      <div className="ticket">
        <h3>Ingressos</h3>
        {ticket.seatName.map((value, index) => (
          <p key={index}>assento {value}</p>
        ))}
      </div>
      <div className="shopper">
        <h3>Comprador</h3>
        <p>Nome: {ticket.name}</p>
        <p>CPF: {ticket.cpf}</p>
      </div>
      <Link to={"/"}>
        <div className="buttonHome">
          <p>Voltar pra Home</p>
        </div>
      </Link>
    </div>
  );
}
