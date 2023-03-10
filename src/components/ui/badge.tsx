import React from 'react';

import cn from '@/lib/cn';

const Badge = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={cn('label-sm whitespace-nowrap rounded-full px-3.5 py-1.5', {
        'bg-green-100 text-green-800': color === 'green',
        'bg-yellow-100 text-yellow-800': color === 'yellow',
        'bg-red-100 text-red-800 dark:bg-red-200': color === 'red',
        'bg-primary-100 text-primary-800': color === 'blue',
        'bg-gray-100/70 text-gray-800': color === 'gray',
        'bg-white text-gray-800': color === 'white',
      })}
    >
      {children}
    </span>
  );
};

export default Badge;
