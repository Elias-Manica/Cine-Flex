export default function Subtitle() {
  return (
    <div className="subtitle">
      <div className="subtitle-seat">
        <div className="seatPersonBusy"></div>
        <h6>Selecionado</h6>
      </div>
      <div className="subtitle-seat">
        <div className="seatPersonAvaib"></div>
        <h6>Disponível</h6>
      </div>
      <div className="subtitle-seat">
        <div className="seatPersonUnAvaib"></div>
        <h6>Indisponível</h6>
      </div>
    </div>
  );
}
