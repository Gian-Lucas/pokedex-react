import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { CardVariant } from "../../components/CardVariant";
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

interface PokemonType extends PokemonDetails {
  evolutionChain: EvolutionChain[];
}

type PokemonDataResponse = {
  damageRelations: DamageRelations;
  pokemon: PokemonType;
};

type Variant = {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
};

export const Pokemon = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<PokemonDataResponse>();
  const [variants, setVariants] = useState<Variant[]>([]);

  useEffect(() => {
    getAllPokemonInfo();
  }, [id]);

  async function getAllPokemonInfo() {
    const newVariants = [] as Variant[];

    const res = await api.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );

    const { varieties } = res.data;

    if (varieties.length !== 1) {
      await varieties.map(async (variant: any) => {
        if (!variant.is_default) {
          const variantRes = await api.get(variant.pokemon.url);

          const types = variantRes.data.types.map((type: any) => {
            return type.type.name;
          });

          const newVariant: Variant = {
            id: variantRes.data.id,
            name: variantRes.data.name,
            types,
            sprite:
              variantRes.data.sprites.other["official-artwork"].front_default,
          };

          newVariants.push(newVariant);
        }
      });
    }
    const { data } = await api.get(
      `https://be-pokedex.herokuapp.com/pokemon/${id}`
    );

    setPokemonData(data);
    setVariants(newVariants);
  }

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

  // console.log(variants);

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

      <section className="variants">
        {variants.length !== 0 && <h1>Variantes</h1>}
        <div className="cards">
          {variants.map((variant) => {
            return (
              <CardVariant
                key={variant.name}
                name={variant.name}
                sprite={variant.sprite}
                types={variant.types}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
};
