import { CgPokemon } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Header = () => (
  <Container>
    <Link to="/" className="logo">
      <CgPokemon size={40} />
      <h1>Pokedex</h1>
    </Link>

    <Link to="/favorites" className="favorites">
      Favoritos (3)
    </Link>
  </Container>
);
