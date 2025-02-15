import { Suspense } from 'react';
import Loading from './components/loading';
import CountriesList from './components/countries-list';

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
