import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CountryCardProps } from '@/app/types';

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Link 
      href={`/countries/${country.cca3}`}
      className="flex flex-col bg-white dark:bg-dark-card rounded-lg shadow-md dark:shadow-lg overflow-hidden hover:shadow-xl dark:hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48">
        <Image 
          src={country.flags.png} 
          alt={`Flag of ${country.name.common}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 truncate">{country.name.common}</h2>
        
        <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-300">
          <p className="truncate">
            <span className="font-semibold">Capital:</span> {country.capital?.join(', ') || 'N/A'}
          </p>
          
          <p>
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>
          
          <p>
            <span className="font-semibold">Continent:</span> {country.continents.join(', ')}
          </p>
          
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          
          <p className="truncate">
            <span className="font-semibold">Languages:</span> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
