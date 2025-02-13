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
    <main className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Lista de Países
      </h1>
      
      {countries.length === 0 ? (
        <div className="text-center text-gray-600">Carregando...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  </main>
  );
}
