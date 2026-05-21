import React, { useState } from 'react';

interface PokemonSearchProps {
  onSearch: (query: string) => void;
}

const PokemonSearch = ({ onSearch }: PokemonSearchProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search pokemons..."
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default PokemonSearch;