import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function isPlaceholder(value?: string | null): boolean {
  if (!value) return true;
  return value.trim().startsWith("[ADD");
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
