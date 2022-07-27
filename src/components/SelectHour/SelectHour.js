import "./style.css";
import React, { useEffect } from "react";
import axios from "axios";
import HourMovieDesign from "../HourMovieDesign/HourMovieDesign";

export default function SelectHour() {
  const [hour, setHour] = React.useState([]);
  const [poster, setPoster] = React.useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes"
    );

    promise.then((response) => {
      setHour(response.data.days);
      setPoster(response.data);
    });
  }, []);

  console.log(hour);
  console.log(poster);
  return (
    <>
      <div className="hour">
        <h2>horario</h2>
      </div>
      <div className="bodyshowHour">
        {hour.map((movieHour) => (
          <HourMovieDesign
            key={movieHour.id}
            weekday={movieHour.weekday}
            date={movieHour.date}
            hour={movieHour.showtimes}
          />
        ))}
      </div>

      <div className="bottom">
        <div className="poster">
          <img src={poster.posterURL} alt={poster.title}></img>
        </div>
        <h4>{poster.title}</h4>
      </div>
    </>
  );
}
