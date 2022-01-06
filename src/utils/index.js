export const formatPokemonId = (id) => {
  const idNumber = parseInt(id);
  if (idNumber < 10) {
    return "00" + id;
  } else if (idNumber < 100) {
    return "0" + id;
  } else {
    return id;
  }
};

const colors = {
  normal: "#AAA67F",
  fire: "#F57D31",
  water: "#6493EB",
  electric: "#F9CF30",
  grass: "#74CB48",
  ice: "#9AD6DF",
  fighting: "#C12239",
  poison: "#A43E9E",
  ground: "#DEC16B",
  flying: "#A891EC",
  psychic: "#FB5584",
  bug: "#A7B723",
  rock: "#B69E31",
  ghost: "#70559B",
  dragon: "#7037FF",
  dark: "#75574C",
  steel: "#B7B9D0",
  fairy: "#E69EAC",
};

export const getPokemonColor = (type) => {
  return colors[`${type}`];
};
