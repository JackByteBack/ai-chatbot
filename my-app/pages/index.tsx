import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList';
import PokemonSearch from '../components/PokemonSearch';

const IndexPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
      const data = await response.json();
      setPokemons(data.results);
    };

    fetchPokemons();
  }, []);

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <PokemonSearch onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </>
  );
};

export default IndexPage;