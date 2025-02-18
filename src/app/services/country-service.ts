import { Country } from "../types/types";

const API_ENDPOINT = 'https://restcountries.com/v3.1';

export async function getCountries(): Promise<Country[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/independent?status=true`);
    if (!response.ok) throw new Error('Failed to fetch countries');
    return response.json();
  } catch (error) {
    throw new Error('Error fetching countries data: ' + error);
  }
}

export async function getCountryDetails(cca3: string): Promise<Country> {
  const res = await fetch(`${API_ENDPOINT}/alpha/${cca3}`);
  if (!res.ok) throw new Error(`Failed to fetch country: ${cca3}`);
  const data = await res.json();
  return data[0];
}

export async function getBorderingCountries(borders: string[]): Promise<Country[]> {
  if (!borders || borders.length === 0) return [];
  
  const uniqueBorders = [...new Set(borders)];
  const countries = await Promise.all(
    uniqueBorders.map(async (cca3) => {
      const res = await fetch(`${API_ENDPOINT}/alpha/${cca3}`);
      const [data] = await res.json();
      return data;
    })
  );
  return countries;
}

export function formatPopulation(population: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(population);
}
