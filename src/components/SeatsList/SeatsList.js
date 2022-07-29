import "./style.css";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import Bottom from "../Bottom/Bottom";
import Subtitle from "../Subtitle/Subtitle";
import Seat from "./Seat";
import SeatBusy from "./SeatBusy";

export default function SeatsList() {
  const [seats, setSeats] = React.useState([]);
  const [poster, setPoster] = React.useState([]);
  const [hour, setHour] = React.useState([]);
  const [day, setDay] = React.useState([]);
  const [hairline, setHairline] = React.useState("");
  const [name, setName] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [seatId, setSeatId] = React.useState([]);

  const params = useParams();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`
    );

    promise.then((response) => {
      setSeats(response.data.seats);
      setPoster(response.data.movie);
      setHour(response.data);
      setDay(response.data.day);
      setHairline("-");
    });
  }, []);

  function handleForm(e) {
    e.preventDefault();

    const ticket = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      {
        ids: seatId,
        name: name,
        cpf: cpf,
      }
    );

    setName("");
    setCpf("");
  }

  function appendIdSeat(id) {
    if (seatId.includes(id)) {
      let indexId = seatId.indexOf(id);
      seatId.splice(indexId, 1);
    } else {
      setSeatId([...seatId, id]);
    }
  }

  console.log(seatId);

  return (
    <>
      <div className="seatBody">
        <h1>Selecione o(s) assento(s)</h1>
        <div className="showSeat">
          {seats.map((value) =>
            value.isAvailable ? (
              <div key={value.id} onClick={() => appendIdSeat(value.id)}>
                <Seat>{value.name}</Seat>
              </div>
            ) : (
              <SeatBusy key={value.id} color="#fbe192">
                {value.name}
              </SeatBusy>
            )
          )}
        </div>
        <Subtitle />
        <form onSubmit={handleForm}>
          <div className="buyerData">
            <div className="nameBuyer">
              <label htmlFor="name">Nome do comprador:</label>
              <input
                placeholder="Digite seu nome..."
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              ></input>
            </div>
            <div className="cpfBuyer">
              <label htmlFor="cpf">CPF do comprador:</label>
              <input
                placeholder="Digite seu CPF..."
                type="number"
                id="cpf"
                onChange={(e) => setCpf(e.target.value)}
                value={cpf}
                required
              ></input>
            </div>
            <button className="buttonBuy" type="submit">
              Reservar assento(s)
            </button>
          </div>
        </form>
      </div>
      <Bottom
        posterURL={poster.posterURL}
        title={poster.title}
        name={hour.name}
        day={day.weekday}
        hairline={hairline}
        setHairline={setHairline}
      />
    </>
  );
}
