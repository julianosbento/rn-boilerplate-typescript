import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';

import { en, es, ptBr } from './locales';

I18n.defaultLocale = 'pt-BR';

I18n.fallbacks = true;

I18n.translations = {
  en,
  es,
  'pt-BR': ptBr,
};

const normalizeTranslate: any = {
  en_US: 'en',
  es_US: 'es',
  pt_BR: 'pt-BR',
  pt_US: 'pt-BR',
};

const getLanguageByDevice = () =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  // eslint-disable-next-line no-prototype-builtins
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize
  );
  // eslint-disable-next-line no-unused-expressions
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'pt-BR');
};

setLanguageToI18n();

const translate = (term: string) => I18n.t(term);

export { I18n, translate };
