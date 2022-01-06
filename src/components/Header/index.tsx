import { CgPokemon } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import { Container } from "./styles";

export const Header = () => {
  const { favorites } = useFavorites();

  return (
    <Container>
      <Link to="/" className="logo">
        <CgPokemon size={40} />
        <h1>Pokedex</h1>
      </Link>

      <Link to="/favorites" className="favorites">
        Favoritos ({favorites.length})
      </Link>
    </Container>
  );
};
