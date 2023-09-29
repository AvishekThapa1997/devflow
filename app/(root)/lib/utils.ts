import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function timeAgo(date: Date | string): string {
  const timeStamp = (
    typeof date === 'string' ? new Date(date) : date
  ).getTime();
  const secondsAgo = Math.floor((Date.now() - timeStamp) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const intervalCount = Math.floor(secondsAgo / seconds);
    if (intervalCount >= 1) {
      return intervalCount === 1
        ? `${intervalCount} ${unit} ago`
        : `${intervalCount} ${unit}s ago`;
    }
  }
  return 'Just now';
}

export function formatNumberWithExtension(number: number): string {
  if (number >= 1e6) {
    return `${(number / 1e6).toFixed(0)}M`;
  } else if (number >= 1e3) {
    return `${(number / 1e3).toFixed(0)}K`;
  } else {
    return number.toString();
  }
}
