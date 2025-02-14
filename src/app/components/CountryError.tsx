import Link from 'next/link';
import { ReactNode } from 'react';

interface CountryErrorProps {
  error: Error;
  backLink?: ReactNode;
}

const CountryError = ({ error, backLink }: CountryErrorProps) => {
  return (
    <div className="max-w-7xl mx-auto p-8 dark:bg-gray-900 min-h-screen">
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4">
          Error loading country
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">{error.message}</p>
        
        {backLink || (
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            Back to country list
          </Link>
        )}
      </div>
    </div>
  );
};

export default CountryError;
