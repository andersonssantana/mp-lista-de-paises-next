export interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  capital?: string[];
  population: number;
  continents: string[];
  region: string;
  subregion?: string;
  borders?: string[];
  languages?: {
    [key: string]: string;
  };
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}

export interface CountryCardProps {
  country: Pick<Country, 
    'cca3' | 
    'name' | 
    'flags' | 
    'capital' | 
    'population' | 
    'continents' | 
    'region' | 
    'languages'
  >;
}
