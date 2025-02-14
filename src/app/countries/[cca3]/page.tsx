import { Country } from '@/app/types';
import Link from 'next/link';
import Image from 'next/image';

async function getCountryDetails(cca3: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
  const [data] = await res.json();
  return data;
}

async function getBorderingCountries(borders: string[]): Promise<Country[]> {
  const requests = borders.map(cca3 => 
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`).then(res => res.json())
  );
  const countries = await Promise.all(requests);
  return countries.flat();
}

export default async function CountryDetails({
  params,
}: {
  params: { cca3: string };
}) {
  const country = await getCountryDetails(params.cca3);
  const borderingCountries = country.borders 
    ? await getBorderingCountries(country.borders)
    : [];

  return (
    <div className="max-w-7xl mx-auto p-8 dark:bg-dark-bg">
      <div className="mb-8">
        <Link href="/" className="text-blue-500 dark:text-blue-400 hover:underline">
          ← Voltar
        </Link>
      </div>

      <div className="bg-white dark:bg-dark-card rounded-lg shadow-md dark:shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 dark:text-gray-100">{country.name.common}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          width={640}
          height={480}
          className="w-full h-64 object-cover rounded-lg"
          priority
        />

          <div className="space-y-4">
            <DetailItem label="Capital" value={country.capital?.join(', ')} />
            <DetailItem label="População" value={country.population.toLocaleString()} />
            <DetailItem label="Continente" value={country.continents.join(', ')} />
            <DetailItem label="Região" value={country.region} />
            <DetailItem 
              label="Idiomas" 
              value={country.languages && Object.values(country.languages).join(', ')} 
            />
          </div>
        </div>

        {borderingCountries.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">Países Fronteiriços</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {borderingCountries.map((borderCountry) => (
                <Link
                  key={borderCountry.cca3}
                  href={`/countries/${borderCountry.cca3}`}
                  className="p-4 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-dark-hover transition-colors"
                >
                  <p className="font-medium dark:text-gray-200">{borderCountry.name.common}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{borderCountry.cca3}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value?: string | number }) {
  return (
    <div className="border-b dark:border-gray-700 pb-2">
      <span className="font-semibold text-gray-600 dark:text-gray-400">{label}: </span>
      <span className="text-gray-800 dark:text-gray-200">{value || 'N/A'}</span>
    </div>
  );
}