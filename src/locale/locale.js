import en from './en.json';
import de from './de.json';

export let translations, currentLanguage;

export function initializeAppLanguage() {
  currentLanguage = localStorage.getItem('language');
  if (!currentLanguage) determineInitialAppLanguage();
  setAppLanguage(currentLanguage);
}

export function setAppLanguage(value) {
  currentLanguage = value;
  localStorage.setItem('language', value);
  if (value === 'en') translations = en;
  if (value === 'de') translations = de;
}

export function text(key, ...args) {
  if (!translations) initializeAppLanguage();
  const value =
    translations.hasOwnProperty(key) && translations[key].length > 0
      ? translations[key]
      : `[${key}]`;
  if (!translations[key])
    console.warn(`Missing ${currentLanguage} translation for key: ${key}`);
  // Replace all instances of '%%' in the string with the passed in arguments
  return value.replace(/%%/g, () => args.shift());
}

function determineInitialAppLanguage() {
  // Check if the browser language is German
  const browserLanguage = navigator.language;
  if (browserLanguage.startsWith('de')) currentLanguage = 'de';
  else currentLanguage = 'en';
}
