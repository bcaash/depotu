
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Check, X as LucideX } from 'lucide-react';

interface CustomToggleSwitchProps {
  id?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  ariaLabel?: string;
}

export const CustomToggleSwitch: React.FC<CustomToggleSwitchProps> = ({
  id,
  checked,
  onCheckedChange,
  className,
  ariaLabel,
}) => {
  const handleToggle = () => {
    onCheckedChange(!checked);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      id={id}
      onClick={handleToggle}
      className={cn(
        'relative inline-flex flex-shrink-0 items-center h-5 w-9 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        checked ? 'bg-green-500' : 'bg-red-500',
        className
      )}
    >
      <span
        className={cn(
          'pointer-events-none inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
          checked ? 'translate-x-[18px]' : 'translate-x-[2px]'
        )}
      >
        {checked ? (
          <Check className="h-3 w-3 text-green-500" />
        ) : (
          <LucideX className="h-3 w-3 text-red-500" />
        )}
      </span>
    </button>
  );
};
