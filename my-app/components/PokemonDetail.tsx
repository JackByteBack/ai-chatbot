'use client';

import { Pokemon, getTypeColor } from '@/lib/pokemon';
import Image from 'next/image';
import { useState } from 'react';

interface PokemonDetailProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const statLabels: Record<string, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  specialAttack: 'Sp. Atk',
  specialDefense: 'Sp. Def',
  speed: 'Speed',
};

export default function PokemonDetail({ pokemon, onClose }: PokemonDetailProps) {
  const [imgError, setImgError] = useState(false);
  const primaryType = pokemon.types[0];
  const typeColor = getTypeColor(primaryType);

  const maxStat = Math.max(...Object.values(pokemon.stats));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div
        className="relative glass-effect rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto
                  animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-0 left-0 w-full h-2 rounded-t-3xl"
          style={{ backgroundColor: typeColor }}
        />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white/90 transition-colors duration-200
                    glass-effect rounded-full p-2 hover:bg-white/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center mb-6">
          <span className="text-white/40 text-lg font-bold">#{String(pokemon.id).padStart(3, '0')}</span>
          <h2 className="text-4xl font-bold text-white mt-2">{pokemon.name}</h2>
          
          <div className="flex gap-2 justify-center mt-3">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className="type-badge text-white text-sm py-2"
                style={{ backgroundColor: getTypeColor(type) }}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative w-full aspect-square max-w-xs mx-auto mb-6">
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{ background: `radial-gradient(circle, ${typeColor}, transparent 70%)` }}
          />
          {!imgError ? (
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="300px"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/30 text-6xl">
              ?
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="glass-effect rounded-xl p-4 text-center">
            <span className="text-white/50 text-sm block mb-1">Height</span>
            <span className="text-white font-bold">{pokemon.height / 10} m</span>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <span className="text-white/50 text-sm block mb-1">Weight</span>
            <span className="text-white font-bold">{pokemon.weight / 10} kg</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-white font-bold text-lg mb-3">Abilities</h3>
          <div className="flex gap-2 flex-wrap">
            {pokemon.abilities.map((ability) => (
              <span
                key={ability}
                className="px-3 py-1 rounded-full text-sm text-white/80 glass-effect"
              >
                {ability}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Base Stats</h3>
          <div className="space-y-2">
            {Object.entries(pokemon.stats).map(([stat, value]) => (
              <div key={stat} className="flex items-center gap-3">
                <span className="text-white/60 text-sm font-bold w-20 text-right">
                  {statLabels[stat] || stat}
                </span>
                <span className="text-white font-bold w-10 text-right">{value}</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${(value / maxStat) * 100}%`,
                      backgroundColor: typeColor,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
