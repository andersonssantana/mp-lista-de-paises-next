'use client'
import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";

interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  capital: string[];
  population: number;
  continents: string[];
  region: string;
  languages?: {
    [key: string]: string;
  };
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/independent?status=true');
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Lista de Países</h1>
      
      {countries.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {countries.map((country) => (
            <CountryCard 
              key={country.cca3} 
              country={country} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
