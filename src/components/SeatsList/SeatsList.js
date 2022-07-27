import "./style.css";
import Bottom from "../Bottom/Bottom";

export default function SeatsList() {
  return (
    <>
      <div className="seatBody">
        <h1>Selecione o(s) assento(s)</h1>
        <div className="showSeat">
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
          <div className="seatPerson">01</div>
        </div>
        <div className="subtitle">
          <div className="subtitle-seat">
            <div className="seatPersonBusy"></div>
            <h6>Selecionado</h6>
          </div>
          <div className="subtitle-seat">
            <div className="seatPersonAvaib"></div>
            <h6>Selecionado</h6>
          </div>
          <div className="subtitle-seat">
            <div className="seatPersonUnAvaib"></div>
            <h6>Selecionado</h6>
          </div>
        </div>
        <div className="buyerData">
          <div className="nameBuyer">
            <h2>Nome do comprador:</h2>
            <input></input>
          </div>
          <div className="cpfBuyer">
            <h2>CPF do comprador:</h2>
            <input></input>
          </div>
        </div>
        <div className="buttonBuy">
          <p>Reservar assento(s)</p>
        </div>
      </div>
      <Bottom />
    </>
  );
}
