import Loader from "react-loader-spinner";
import { useState } from "react";
import { api } from "../../services/api";
import { Container, Form } from "./styles";
import { CardList } from "../../components/CardList";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

// interface Pokemon {
//   evolutionChain: [];
//   firstType: string;
//   gameSprite: string;
//   gameSpriteShiny: string;
//   id: string;
//   name: string;
//   secondType: string | null;
//   sprite: string;
//   isFavorite: boolean;
// }

export const Dashboard = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string | undefined }>();

  const [generation, setGeneration] = useState(id ? id : 1);

  const selectGeneration = (generation: number) => {
    setGeneration(generation);
  };

  const { data, isLoading } = useQuery(
    `generationData ${generation}`,
    async () => {
      const res = await api.get(
        `https://be-pokedex.herokuapp.com/pokemon/all/${generation}`
      );

      return res.data;
    }
  );

  if (isLoading) {
    return (
      <Loader
        type="ThreeDots"
        height={100}
        width={100}
        color="#aaa"
        visible={true}
      />
    );
  }

  return (
    <Container>
      <Form>
        <select
          onChange={(e) => {
            if (
              Number(e.target.value) === generation ||
              e.target.value === "0"
            ) {
              return;
            }
            selectGeneration(Number(e.target.value));
            navigate(`/${e.target.value}`);
          }}
        >
          <option value="0">Escolha a geração</option>
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

      <CardList pokemons={data} />
    </Container>
  );
};
