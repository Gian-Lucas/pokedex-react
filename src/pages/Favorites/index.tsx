import { CardList } from "../../components/CardList";
import { useFavorites } from "../../hooks/useFavorites";
import { Container } from "./styles";

export const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <Container>
      <h1>Favoritos</h1>

      {favorites.length === 0 ? (
        <h2>Nenhum Pokemon</h2>
      ) : (
        <CardList pokemons={favorites} />
      )}
    </Container>
  );
};
