import "./style.css";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import HourMovieDesign from "../HourMovieDesign/HourMovieDesign";
import Bottom from "../Bottom/Bottom";

export default function SelectHour() {
  const [hour, setHour] = React.useState([]);
  const [poster, setPoster] = React.useState([]);
  const params = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idFilme}/showtimes`
    );

    promise.then((response) => {
      setHour(response.data.days);
      setPoster(response.data);
    });
  }, []);

  console.log(params);
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
      <Bottom posterURL={poster.posterURL} title={poster.title} />
    </>
  );
}
