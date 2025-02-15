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
  country: Country;
}

export interface DetailItemProps {
  label: string;
  value?: string | number;
}

export interface CountryPageProps {
  params: {
    cca3: string;
  };
}
