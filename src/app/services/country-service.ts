import { Country } from "../types/types";

const API_ENDPOINT = 'https://restcountries.com/v3.1/independent?status=true';

export const CountryService = {
  async getCountries(): Promise<Country[]> {
    try {
      const response = await fetch(API_ENDPOINT);
      if (!response.ok) throw new Error('Failed to fetch countries');
      return response.json();
    } catch (error) {
      throw new Error('Error fetching countries data: ' + error);
    }
  },
};

export async function getCountryDetails(cca3: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
  if (!res.ok) throw new Error(`Failed to fetch country: ${cca3}`);
  const data = await res.json();
  return data[0];
}

export async function getBorderingCountries(borders: string[]): Promise<Country[]> {
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
