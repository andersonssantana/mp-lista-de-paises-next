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
