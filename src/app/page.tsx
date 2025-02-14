import { Suspense } from 'react';
import CountryCard from './components/CountryCard';
import Loading from './components/Loading';
import { Country } from '@/app/types';

async function getCountries(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/independent?status=true');
  return response.json();
}

async function CountriesList() {
  const countries = await getCountries();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Lista de Países
        </h1>
        
        <Suspense fallback={
          <Loading />
        }>
          <CountriesList />
        </Suspense>
      </div>
    </main>
  );
}
