export async function getPokemon(idPokemon) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
  );
  const data = await response.json();
  return data;
}
