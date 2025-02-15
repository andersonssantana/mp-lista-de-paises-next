import { CountryService } from '@/app/services/country-service';
import { CountryCard } from '../country-card';

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

export default CountriesList;
