import { Container } from "./styles";
import React, { useEffect } from "react";
import axios from "axios";
import MovieDesign from "../MovieDesign/MovieDesign";
import MoviesList from "../MoviesList/MoviesList";

export default function SelectMovie() {
  const [listMovie, setListMovie] = React.useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    promise.then((value) => {
      setListMovie(value.data);
    });
  }, []);

  return (
    <Container>
      <h2>Selecione o filme</h2>
      <MoviesList>
        {listMovie.map((movie) => (
          <MovieDesign
            key={movie.id}
            id={movie.id}
            posterURL={movie.posterURL}
            title={movie.title}
          />
        ))}
      </MoviesList>
    </Container>
  );
}
