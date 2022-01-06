import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavorites } from "../../hooks/useFavorites";
import { formatPokemonId, getPokemonColor } from "../../utils";
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

export const Card = ({
  id,
  name,
  firstType,
  sprite,
  secondType,
  evolutionChain,
  gameSprite,
  gameSpriteShiny,
}: CardProps) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(
    favorites.find((pokemon) => pokemon.id === id) ? true : false
  );

  const toogleIsFavorite = () => {
    if (isFavorite) {
      removeFromFavorites({
        isFavorite,
        id,
        name,
        firstType,
        secondType,
        sprite,
        gameSprite,
        gameSpriteShiny,
        evolutionChain,
      });
    } else {
      addToFavorites({
        isFavorite,
        id,
        name,
        firstType,
        secondType,
        sprite,
        gameSprite,
        gameSpriteShiny,
        evolutionChain,
      });
    }
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