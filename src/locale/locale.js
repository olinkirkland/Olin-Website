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
  else if (value === 'de') translations = de;
}

export function text(path, ...args) {
  if (!translations) initializeAppLanguage();
  const value = path.split('.').reduce((acc, curr) => acc[curr], translations);
  if (!value) {
    console.error(`No translation found for path '${path}'`);
    return `[${path}]`;
  }

  // Replace all instances of '%%' in the string with the passed-in arguments
  return value.replace(/%%/g, () => args.shift());
}

function determineInitialAppLanguage() {
  // Check if the browser language is German
  const browserLanguage = navigator.language;
  if (browserLanguage.startsWith('de')) currentLanguage = 'de';
  else currentLanguage = 'en';
}
