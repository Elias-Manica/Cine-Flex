import { Hour, Container } from "./styles";
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
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`
    );

    promise.then((response) => {
      setHour(response.data.days);
      setPoster(response.data);
    });
  }, [params.idFilme]);

  return (
    <>
      <Hour>
        <h2>horario</h2>
      </Hour>
      <Container>
        {hour.map((movieHour) => (
          <HourMovieDesign
            key={movieHour.id}
            weekday={movieHour.weekday}
            date={movieHour.date}
            hour={movieHour.showtimes}
            id={movieHour.showtimes}
          />
        ))}
      </Container>
      <Bottom posterURL={poster.posterURL} title={poster.title} />
    </>
  );
}
