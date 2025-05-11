import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appStoreLinks = {
  appStore: "#",
  googlePlay: "#",
};

export const contactInfo = {
  phone: "+82 02-1234-5678",
  email: "support@barogerae.com",
  address: "서울특별시 강남구 테헤란로 123",
};

export const socialLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
  youtube: "#",
};
