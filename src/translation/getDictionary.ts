import { defaultLocale, Locale } from 'src/translation/locales';

export const dictionaries = {
  en: () => import('./en/en').then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]
    ? await dictionaries[locale]()
    : await dictionaries[defaultLocale]();
}

export async function isDictionaryValid(locale: string) {
  return (dictionaries as any)[locale] ? true : false;
}
