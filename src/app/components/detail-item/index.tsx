import React from 'react';
import { DetailItemProps } from '@/app/types/types';

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
      <dt className="text-sm font-semibold text-gray-500 dark:text-gray-400">{label}</dt>
      <dd className="mt-1 text-lg font-medium text-gray-800 dark:text-gray-200">
        {value || 'N/A'}
      </dd>
    </div>
  );
};

export default DetailItem;
