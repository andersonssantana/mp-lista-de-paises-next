import { Country } from '@/app/types';
import Link from 'next/link';
import Image from 'next/image';
import DetailItem from '@/app/components/DetailItem';
import CountryError from '@/app/components/CountryError';

async function getCountryDetails(cca3: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
  if (!res.ok) throw new Error(`Failed to fetch country: ${cca3}`);
  const data = await res.json();
  return data[0];
}

async function getBorderingCountries(borders: string[]): Promise<Country[]> {
  if (!borders || borders.length === 0) return [];
  
  const uniqueBorders = [...new Set(borders)];
  const countries = await Promise.all(
    uniqueBorders.map(async (cca3) => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
      const [data] = await res.json();
      return data;
    })
  );
  return countries;
}

export default async function CountryPage({
  params,
}: {
  params: { cca3: string };
}) {
  const cca3 = params.cca3.toUpperCase();

  try {
    const country = await getCountryDetails(cca3);
    const borderingCountries = await getBorderingCountries(country.borders || []);

    return (
      <div className="max-w-7xl mx-auto p-8 dark:bg-gray-900 min-h-screen">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
        </div>

        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <header className="mb-8">
            <h1 className="text-4xl font-bold dark:text-white">
              {country.name.common}
              <span className="ml-3 text-2xl text-gray-500 dark:text-gray-300">
                ({country.cca3})
              </span>
            </h1>
          </header>

          <section className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src={country.flags.png}
                alt={`Bandeira de ${country.name.common}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="space-y-6">
              <DetailItem label="Official name" value={country.name.official} />
              <DetailItem label="Capital" value={country.capital?.join(', ')} />
              <DetailItem label="Population" value={country.population.toLocaleString('pt-BR')} />
              <DetailItem label="Continent" value={country.continents.join(', ')} />
              <DetailItem label="Region" value={country.region} />
              <DetailItem 
                label="Languages" 
                value={country.languages && Object.values(country.languages).join(', ')} 
              />
            </div>
          </section>

          {borderingCountries.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Bordering Countries ({borderingCountries.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {borderingCountries.map((neighbor) => (
                  <Link
                    key={neighbor.cca3}
                    href={`/countries/${neighbor.cca3}`}
                    className="group p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <h3 className="font-medium text-gray-800 dark:text-gray-100 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                      {neighbor.name.common}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {neighbor.cca3}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    );
  } catch (error) {
    return (
      <CountryError
        error={error as Error}
        backLink={
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            Back
          </Link>
        }
      />
    );
  }
}
