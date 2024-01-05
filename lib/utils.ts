import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
export const siteKeywords = process.env.NEXT_PUBLIC_SITE_KEYWORDS;
export const siteAuthor = process.env.NEXT_PUBLIC_SITE_AUTHOR;
export const siteImage = process.env.NEXT_PUBLIC_SITE_IMAGE;
export const siteTwitter = process.env.NEXT_PUBLIC_SITE_TWITTER;
export const siteFacebook = process.env.NEXT_PUBLIC_SITE_FACEBOOK;
export const siteInstagram = process.env.NEXT_PUBLIC_SITE_INSTAGRAM;
export const siteYoutube = process.env.NEXT_PUBLIC_SITE_YOUTUBE;
export const siteGithub = process.env.NEXT_PUBLIC_SITE_GITHUB;
export const siteColor = process.env.NEXT_PUBLIC_SITE_COLOR;
export const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE;
export const siteEmail = process.env.NEXT_PUBLIC_SITE_EMAIL;
