import { Suspense } from 'react';
import { CountryService } from './services/country-service';
import { CountryCard } from './components/country-card';
import Loading from './components/loading';

async function CountriesList() {
  const countries = await CountryService.getCountries();
  
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
    <main className="min-h-screen bg-gray-50 dark:bg-dark-bg p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Countries Explorer
        </h1>
        
        <Suspense fallback={<Loading />}>
          <CountriesList />
        </Suspense>
      </div>
    </main>
  );
}
