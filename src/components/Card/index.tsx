import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavorites } from "../../hooks/useFavorites";
import { formatPokemonId, getPokemonColor } from "../../utils";
import { Modal } from "../Modal";
import { Container, PokemonsDetails } from "./styles";

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
  const [modalStatus, setModalStatus] = useState(false);

  const toogleModalStatus = () => {
    setModalStatus(!modalStatus);
  };

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
      <Modal
        isOpen={modalStatus}
        setIsOpen={toogleModalStatus}
        bg={getPokemonColor(firstType)}
      >
        <PokemonsDetails>
          <div className="header">
            <span>{name}</span>
            {secondType ? (
              <div className="types">
                <img
                  className="first"
                  src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${firstType}.png`}
                  alt={firstType}
                />
                <img
                  src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${secondType}.png`}
                  alt={secondType}
                />
              </div>
            ) : (
              <img
                src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${firstType}.png`}
                alt={firstType}
              />
            )}
          </div>

          <div className="body">
            <img src={sprite} alt={name} />
          </div>

          <span className="spanEvo">Formas normal e shiny</span>
          <div className="evolutions">
            <img src={gameSprite} alt={name} />
            <img src={gameSpriteShiny} alt={name} />
          </div>

          <div className="table">
            <table>
              <tbody>
                <tr>
                  <td className="td-gray not-border">Tipo</td>
                  <td className="td-light-gray not-border">
                    {secondType ? (
                      <div className="types">
                        <img
                          className="first"
                          src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${firstType}-name.webp`}
                          alt={firstType}
                        />
                        <img
                          src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${secondType}-name.webp`}
                          alt={secondType}
                        />
                      </div>
                    ) : (
                      <img
                        src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${firstType}-name.webp`}
                        alt={firstType}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="td-gray">Evoluções: </td>
                  <td className="td-light-gray">
                    {evolutionChain.map((evolution) => {
                      if (
                        evolutionChain[evolutionChain.length - 1] === evolution
                      ) {
                        return evolution;
                      }

                      return evolution + ", ";
                    })}
                  </td>
                </tr>
                {/* <tr>
                <td className="td-gray">Vantagem</td>
                <td className="td-light-gray"></td>
              </tr>
              <tr>
                <td className="td-gray">Desvantagem</td>
                <td className="td-light-gray"></td>
              </tr> */}
              </tbody>
            </table>
          </div>
        </PokemonsDetails>
      </Modal>
      <div className="header">
        <span>#{formatPokemonId(id)}</span>

        {isFavorite ? (
          <MdFavorite
            className="icon"
            onClick={toogleIsFavorite}
            size={"1.8rem"}
          />
        ) : (
          <MdFavoriteBorder
            className="icon"
            onClick={toogleIsFavorite}
            size={"1.8rem"}
          />
        )}
      </div>
      <img
        className="image"
        src={sprite}
        alt={name}
        onClick={toogleModalStatus}
      />
      <div className="name">{name}</div>
    </Container>
  );
};
