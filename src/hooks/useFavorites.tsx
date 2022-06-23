import { createContext, ReactNode, useContext, useState } from "react";

interface Pokemon {
  evolutionChain: Array<string>;
  firstType: string;
  gameSprite: string;
  gameSpriteShiny: string;
  id: string;
  name: string;
  secondType: string | null;
  sprite: string;
  isFavorite: boolean;
}

interface FavoritesContextData {
  favorites: Pokemon[];
  addToFavorites: (pokemon: Pokemon) => void;
  removeFromFavorites: (pokemon: Pokemon) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesContext = createContext({} as FavoritesContextData);

export const FavoritesProvider = ({
  children,
}: FavoritesProviderProps): JSX.Element => {
  const [favorites, setFavorites] = useState<Pokemon[]>(() => {
    const storagedFavorites = localStorage.getItem("favorites");

    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }

    return [];
  });

  const addToFavorites = (pokemon: Pokemon) => {
    console.log("add " + pokemon.name);
    const newFavorites = [...favorites, pokemon];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
  const removeFromFavorites = (pokemon: Pokemon) => {
    console.log("remove " + pokemon.name);
    const newFavorites = favorites.filter((poke) => poke.id !== pokemon.id);

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextData => {
  const context = useContext(FavoritesContext);

  return context;
};
