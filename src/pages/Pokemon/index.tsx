import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";

export const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getAllPokemonInfo();
  });

  async function getAllPokemonInfo() {
    const { data } = await api.get(`pokemon/${id}`);

    console.log(data);
  }

  return (
    <Container>
      <h1>Pokemon ID: {id}</h1>
    </Container>
  );
};
