import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  const day = new Date(dateStr);

  const options = {month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'} as const
  return day.toLocaleDateString("en-US", options)
}