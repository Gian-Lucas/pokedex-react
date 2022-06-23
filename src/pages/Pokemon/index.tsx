import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { formatPokemonId, getPokemonColor } from "../../utils";
import { Container } from "./styles";

type DamageRelations = {
  double_damage_from: Array<string>;
  double_damage_to: Array<string>;
  half_damage_from: Array<string>;
  half_damage_to: Array<string>;
};

type PokemonDetails = {
  id: string;
  name: string;
  sprite: string;
  gameSprite: string;
  gameSpriteShiny: string;
  firstType: string;
  secondType: string;
};

interface EvolutionChain extends PokemonDetails {
  evolutionChain: Array<string>;
}

interface Pokemon extends PokemonDetails {
  evolutionChain: EvolutionChain[];
}

type PokemonDataResponse = {
  damageRelations: DamageRelations;
  pokemon: Pokemon;
};

export const Pokemon = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<PokemonDataResponse>();

  useEffect(() => {
    getAllPokemonInfo();
  }, [id]);

  async function getAllPokemonInfo() {
    const { data } = await api.get(`pokemon/${id}`);

    setPokemonData(data);
  }

  // console.log(pokemonData);

  if (!pokemonData) {
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );
  }

  const { pokemon, damageRelations } = pokemonData;
  const evolutionsInOrder = pokemon.evolutionChain[0].evolutionChain;

  const evolutions = evolutionsInOrder.map((evolution) => {
    return pokemon.evolutionChain.find((poke) => poke.name === evolution);
  });

  // console.log(evolutions);

  return (
    <Container bg={getPokemonColor(pokemon.firstType)}>
      <main>
        <div className="poke">
          <header>
            <h1>{pokemon.name}</h1>

            <div>
              <img
                src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${pokemon.firstType}.png`}
                alt={pokemon.firstType}
              />

              {pokemon.secondType && (
                <img
                  className="mg"
                  src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${pokemon.secondType}.png`}
                  alt={pokemon.secondType}
                />
              )}
            </div>
          </header>

          <img src={pokemon.sprite} alt={pokemon.name} />
        </div>

        <div className="info">
          <img src={pokemon.gameSprite} alt={pokemon.name} />

          <table>
            <tbody>
              <tr>
                <th>Número</th>
                <td>#{formatPokemonId(pokemon.id)}</td>
              </tr>
              <tr>
                <th>Tipo</th>
                <td>
                  <img
                    src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${pokemon.firstType}-name.webp`}
                    alt={pokemon.firstType}
                  />

                  {pokemon.secondType && (
                    <img
                      src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${pokemon.secondType}-name.webp`}
                      alt={pokemon.secondType}
                    />
                  )}
                </td>
              </tr>

              <tr>
                <th>Vantagens</th>
                <td>
                  {damageRelations.double_damage_to.map((type) => {
                    return (
                      <img
                        key={type + Math.random()}
                        src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${type}-name.webp`}
                        alt={type}
                      />
                    );
                  })}
                </td>
              </tr>
              <tr>
                <th>Desvantagens</th>
                <td>
                  {damageRelations.double_damage_from.map((type) => {
                    return (
                      <img
                        key={type + Math.random()}
                        src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${type}-name.webp`}
                        alt={type}
                      />
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <section className="evolutions">
        <h1>Linha de evolução</h1>

        <div className="cards">
          {evolutions.map((evolution) => {
            return evolution && <Card key={evolution.id} {...evolution} />;
          })}
        </div>
      </section>
    </Container>
  );
};
