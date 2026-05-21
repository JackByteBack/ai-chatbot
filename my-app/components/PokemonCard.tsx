'use client';

import { Pokemon, getTypeColor } from '@/lib/pokemon';
import Image from 'next/image';
import { useState } from 'react';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const primaryType = pokemon.types[0];
  const typeColor = getTypeColor(primaryType);

  return (
    <div
      onClick={() => onClick(pokemon)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: `radial-gradient(circle, ${typeColor}40, transparent 70%)` }}
      />
      
      <div className="relative glass-effect rounded-2xl p-6 transition-all duration-500 
                    group-hover:glass-effect-hover group-hover:border-white/30
                    card-shine">
        <div 
          className="absolute top-0 left-0 w-full h-1 rounded-t-2xl transition-all duration-500
                      opacity-50 group-hover:opacity-100"
          style={{ backgroundColor: typeColor }}
        />
        
        <div className="text-center mb-4">
          <span className="text-white/40 text-sm font-bold">#{String(pokemon.id).padStart(3, '0')}</span>
        </div>
        
        <div className="relative w-full aspect-square mb-4">
          <div 
            className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle, ${typeColor}, transparent 70%)` }}
          />
          <div className="relative w-full h-full flex items-center justify-center">
            {!imgError ? (
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                fill
                className={`object-contain drop-shadow-2xl transition-all duration-500 ${isHovered ? 'scale-110 animate-bounce-slow' : ''}`}
                sizes="(max-width: 768px) 100vw, 200px"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/50 text-4xl font-bold">
                ?
              </div>
            )}
          </div>
        </div>
        
        <h3 className="text-white text-center font-bold text-xl mb-3 transition-colors duration-300
                      group-hover:text-gradient">
          {pokemon.name}
        </h3>
        
        <div className="flex gap-2 justify-center flex-wrap">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className="type-badge text-white"
              style={{ backgroundColor: getTypeColor(type) }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
