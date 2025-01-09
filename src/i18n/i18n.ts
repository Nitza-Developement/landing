import { createI18n } from 'vue-i18n';
import es from './locales/es.json';
import en from './locales/en.json';

export const savedLocale = () => localStorage.getItem('locale') || 'es';
export const i18n = createI18n({
  locale: savedLocale(), // idioma por defecto
  fallbackLocale: savedLocale(), // idioma de reserva
  messages: {
    es,
    en,
  },
  legacy: false, // habilitar la API de composición
});