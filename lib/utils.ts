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

export function formatTime(timeStr: string) : string {
  // console.log(`Time Received: ${timeStr}`)
  const [hours, minutes, seconds] = timeStr.split(":").map(Number)
  
  const date = new Date();
  date.setHours(hours, minutes, seconds)

  const newTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  })
  // console.log(`New Time: ${newTime}`)
  return newTime
}