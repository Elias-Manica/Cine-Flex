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

  const params = useParams();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`
    );

    promise.then((response) => {
      setSeats(response.data.seats);
      setPoster(response.data.movie);
      setHour(response.data);
      setDay(response.data.day);
      setHairline("-");
    });
  }, []);

  return (
    <>
      <div className="seatBody">
        <h1>Selecione o(s) assento(s)</h1>
        <div className="showSeat">
          {seats.map((value) =>
            !value.isAvailable ? (
              <Seat key={value.id}>{value.name}</Seat>
            ) : (
              <SeatBusy key={value.id} color="#fbe192">
                {value.name}
              </SeatBusy>
            )
          )}
        </div>
        <Subtitle />
        <div className="buyerData">
          <div className="nameBuyer">
            <h2>Nome do comprador:</h2>
            <input placeholder="Digite seu nome..."></input>
          </div>
          <div className="cpfBuyer">
            <h2>CPF do comprador:</h2>
            <input placeholder="Digite seu CPF..."></input>
          </div>
        </div>
        <div className="buttonBuy">
          <p>Reservar assento(s)</p>
        </div>
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
