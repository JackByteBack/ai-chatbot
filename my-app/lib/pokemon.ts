export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

const POKEMON_API = 'https://pokeapi.co/api/v2';

export async function getAllPokemon(): Promise<Pokemon[]> {
  try {
    const response = await fetch(`${POKEMON_API}/pokemon?limit=151`);
    const data = await response.json();
    
    const pokemonPromises = data.results.map(async (p: { url: string }) => {
      const res = await fetch(p.url);
      const details = await res.json();
      
      return {
        id: details.id,
        name: details.name.charAt(0).toUpperCase() + details.name.slice(1),
        image: details.sprites.other['official-artwork'].front_default || details.sprites.front_default,
        types: details.types.map((t: { type: { name: string } }) => t.type.name),
        height: details.height,
        weight: details.weight,
        abilities: details.abilities.map((a: { ability: { name: string } }) => 
          a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)
        ),
        stats: {
          hp: details.stats[0].base_stat,
          attack: details.stats[1].base_stat,
          defense: details.stats[2].base_stat,
          specialAttack: details.stats[3].base_stat,
          specialDefense: details.stats[4].base_stat,
          speed: details.stats[5].base_stat,
        },
      };
    });
    
    return await Promise.all(pokemonPromises);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return [];
  }
}

export function getTypeColor(type: string): string {
  const typeColors: Record<string, string> = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  return typeColors[type] || '#A8A878';
}
