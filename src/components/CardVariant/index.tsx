import { CgPokemon } from "react-icons/cg";
import { getPokemonColor } from "../../utils";
import { Container } from "../Card/styles";

interface CardVariantProps {
  types: Array<string>;
  sprite: string;
  name: string;
}

export const CardVariant = ({ name, sprite, types }: CardVariantProps) => {
  return (
    <Container color={getPokemonColor(types[0])}>
      <div className="header">
        <CgPokemon size={"2rem"} />

        <div className="types">
          {types.map((type) => {
            return (
              <img
                className={types[1] ? "ml" : ""}
                key={type}
                src={`https://raw.githubusercontent.com/Gian-Lucas/pokedex-react/master/src/assets/${type}.png`}
                alt={type}
              />
            );
          })}
        </div>
      </div>
      <div>
        {sprite === null ? (
          <a
            href={`https://www.google.com/search?q=${name} imagens`}
            className="not-img"
            target="_blank"
          >
            <div>Sem imagem, clique aqui para buscar no google</div>
          </a>
        ) : (
          <img className="image" src={sprite} alt={name} />
        )}
        <div className="name">{name}</div>
      </div>
    </Container>
  );
};
