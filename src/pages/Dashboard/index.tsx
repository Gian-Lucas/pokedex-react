import Loader from "react-loader-spinner";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Form } from "./styles";
import { CardList } from "../../components/CardList";

interface Pokemon {
  evolutionChain: [];
  firstType: string;
  gameSprite: string;
  gameSpriteShiny: string;
  id: string;
  name: string;
  secondType: string | null;
  sprite: string;
  isFavorite: boolean;
}

export const Dashboard = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [generation, setGeneration] = useState(1);
  const [loaderVisible, setLoaderVisible] = useState(true);

  const selectGeneration = (generation: number) => {
    setGeneration(generation);
    setLoaderVisible(true);
  };

  useEffect(() => {
    async function getPokemons() {
      const res = await api.get(
        `https://be-pokedex.herokuapp.com/pokemon/all/${generation}`
      );

      setPokemons(res.data);
      setLoaderVisible(false);
    }

    getPokemons();
  }, [generation]);

  return (
    <Container>
      <Form>
        <label htmlFor="number-of-pokemons">Escolha a geração</label>
        <select
          id="number-of-pokemons"
          onChange={(e) => selectGeneration(Number(e.target.value))}
        >
          <option value="1">Primeira Geração</option>
          <option value="2">Segunda Geração</option>
          <option value="3">Terceira Geração</option>
          <option value="4">Quarta Geração</option>
          <option value="5">Quinta Geração</option>
          <option value="6">Sexta Geração</option>
          <option value="7">Sétima Geração</option>
          <option value="8">Oitava Geração</option>
        </select>
      </Form>

      <Loader
        type="ThreeDots"
        height={100}
        width={100}
        color="#aaa"
        visible={loaderVisible}
      />

      <CardList pokemons={pokemons} />
    </Container>
  );
};
