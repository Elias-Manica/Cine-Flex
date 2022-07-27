import "./style.css";
import React, { useEffect } from "react";
import axios from "axios";
import HourMovieDesign from "../HourMovieDesign/HourMovieDesign";

export default function SelectHour() {
  const [hour, setHour] = React.useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes"
    );

    promise.then((response) => {
      setHour(response.data.days);
    });
  }, []);

  console.log(hour);

  return (
    <>
      <div className="hour">
        <h2>horario</h2>
      </div>
      {hour.map((movieHour) => (
        <HourMovieDesign
          key={movieHour.id}
          weekday={movieHour.weekday}
          date={movieHour.date}
          hour={movieHour.showtimes}
        />
      ))}
    </>
  );
}
