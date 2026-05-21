'use client';

import { Pokemon } from '@/lib/pokemon';
import PokemonCard from './PokemonCard';

interface PokemonGridProps {
  pokemon: Pokemon[];
  onSelectPokemon: (pokemon: Pokemon) => void;
  loading?: boolean;
}

export default function PokemonGrid({ pokemon, onSelectPokemon, loading }: PokemonGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="glass-effect rounded-2xl p-6 animate-pulse"
          >
            <div className="text-center mb-4">
              <div className="w-16 h-4 bg-white/20 rounded mx-auto" />
            </div>
            <div className="aspect-square bg-white/10 rounded-full mb-4" />
            <div className="w-24 h-6 bg-white/20 rounded mx-auto mb-3" />
            <div className="flex gap-2 justify-center">
              <div className="w-16 h-6 bg-white/20 rounded-full" />
              <div className="w-12 h-6 bg-white/20 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (pokemon.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-6">🔍</div>
        <h3 className="text-2xl font-bold text-white/70 mb-2">No Pokemon Found</h3>
        <p className="text-white/50">Try searching with a different name or type</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onClick={onSelectPokemon} />
      ))}
    </div>
  );
}
