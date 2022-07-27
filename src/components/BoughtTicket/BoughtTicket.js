import "./style.css";

export default function BoughtTicket() {
  return (
    <div className="BoughtTicket">
      <div className="successes">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <div className="movieTicket">
        <h3>Filme e sessão</h3>
        <p>Enola Holmes</p>
        <p>24/06/2021 15:00</p>
      </div>
      <div className="ticket">
        <h3>Ingressos</h3>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </div>
      <div className="shopper">
        <h3>Comprador</h3>
        <p>Nome: João da Silva Sauro</p>
        <p>CPF: 123.456.789-10</p>
      </div>
      <div className="buttonHome">
        <p>Voltar pra Home</p>
      </div>
    </div>
  );
}
