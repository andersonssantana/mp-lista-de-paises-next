import { CountryCardProps } from '@/app/types/types';
import Image from 'next/image';
import Link from 'next/link';

export const CountryCard = ({ country }: CountryCardProps) => (
  <Link
    href={`/countries/${country.cca3}`}
    className="flex flex-col bg-white dark:bg-dark-card rounded-lg shadow-md dark:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div className="relative h-48">
      <Image
        src={country.flags.png}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    
    <div className="p-4 flex flex-col gap-2">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 truncate">
        {country.name.common}
      </h2>
    </div>
  </Link>
);
