import React from 'react';
import Image from 'next/image';

interface CountryCardProps {
  country: {
    cca3: string;
    name: {
      common: string;
    };
    flags: {
      png: string;
      svg: string;
    };
    capital?: string[];
    population: number;
    continents: string[];
    region: string;
    languages?: {
      [key: string]: string;
    };
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div>
      <Image 
        src={country.flags.png} 
        alt={`Flag of ${country.name.common}`}
        width={320}
        height={160}
        className="flag-image"
      />
      
      <h2>{country.name.common}</h2>
      
      <div>
        <p>
          <strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}
        </p>
        
        <p>
          <strong>População:</strong> {country.population.toLocaleString()}
        </p>
        
        <p>
          <strong>Continente:</strong> {country.continents.join(', ')}
        </p>
        
        <p>
          <strong>Região:</strong> {country.region}
        </p>
        
        <p>
          <strong>Idiomas:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
