import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { formatPokemonId, getPokemonColor } from "../utils";
import { Container } from "./styles";

interface CardProps {
  evolutionChain: [];
  firstType: string;
  gameSprite: string;
  gameSpriteShiny: string;
  id: string;
  name: string;
  secondType: string | null;
  sprite: string;
}

export const Card = ({ id, name, firstType, sprite }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toogleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container color={getPokemonColor(firstType)}>
      <div className="header">
        <span>#{formatPokemonId(id)}</span>

        {isFavorite ? (
          <MdFavorite className="icon" onClick={toogleIsFavorite} size={25} />
        ) : (
          <MdFavoriteBorder
            className="icon"
            onClick={toogleIsFavorite}
            size={25}
          />
        )}
      </div>
      <img src={sprite} alt={name} />
      <div className="name">{name}</div>
    </Container>
  );
};
