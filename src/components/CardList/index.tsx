import { Card } from "../Card";
import { Container } from "./styles";

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

interface CardListProps {
  pokemons: Pokemon[];
}

export const CardList = (pokemons: CardListProps) => (
  <Container>
    {pokemons.pokemons.map((pokemon) => (
      <Card {...pokemon} key={pokemon.id} />
    ))}
  </Container>
);
