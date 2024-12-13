import dictionary from 'src/translation/en/en';

export type Locale = 'en';
export const defaultLocale = process.env.NEXT_PUBLIC_LOCALE as Locale || 'en';
export const locales: Locale[] = ['en'];
export type Dictionary = typeof dictionary;
