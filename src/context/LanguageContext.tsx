import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import {
  LanguageCode,
  DestinationTrip,
  TravelStyle,
  LocalizedDestinationTrip,
  LocalizedTravelStyle,
} from '../types';
import { TRANSLATIONS, TranslationDictionary } from '../i18n/translations';
import {
  toShortLang,
  ShortLangCode,
  localizeContent as coreLocalizeContent,
  localizeTrip as coreLocalizeTrip,
  localizeTravelStyle as coreLocalizeTravelStyle,
  formatCurrency as coreFormatCurrency,
  formatNumber as coreFormatNumber,
  formatPercent as coreFormatPercent,
  formatDate as coreFormatDate,
} from '../services/localizationEngine';

export type CallableTranslationDictionary = TranslationDictionary & {
  (key: string, fallback?: string): string;
};

export interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: CallableTranslationDictionary;
  translate: (key: string, fallback?: string) => string;
  langShort: ShortLangCode;
  // Universal presentation-layer capabilities for any future backend data
  localizeContent: (content: unknown, fallback?: string) => string;
  localizeTrip: (trip: DestinationTrip | null | undefined) => LocalizedDestinationTrip;
  localizeTravelStyle: (style: TravelStyle) => LocalizedTravelStyle;
  formatCurrency: (amount: number) => string;
  formatNumber: (value: number) => string;
  formatPercent: (value: number) => string;
  formatDate: (date: string | Date) => string;
}

const STORAGE_KEY = 'sarathi_language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && ['en-IN', 'hi-IN', 'ml-IN', 'kn-IN', 'ta-IN'].includes(stored)) {
        return stored as LanguageCode;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'en-IN';
  });

  const setLanguage = (newLang: LanguageCode) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore localStorage errors
    }
  };

  const langShort = toShortLang(language);

  // Memoized translation dictionary + callable function
  const t = useMemo<CallableTranslationDictionary>(() => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS['en-IN'];
    const callable = ((key: string, fallback?: string): string => {
      return dict[key] || fallback || key;
    }) as CallableTranslationDictionary;

    Object.assign(callable, dict);
    return callable;
  }, [language]);

  const translate = useMemo(() => {
    return (key: string, fallback?: string): string => {
      const dict = TRANSLATIONS[language] || TRANSLATIONS['en-IN'];
      return dict[key] || fallback || key;
    };
  }, [language]);

  // Dynamic presentation-layer helpers bound to the active user language
  const boundLocalizeContent = useMemo(() => {
    return (content: unknown, fallback?: string) =>
      coreLocalizeContent(content, language, fallback);
  }, [language]);

  const boundLocalizeTrip = useMemo(() => {
    return (trip: DestinationTrip | null | undefined) =>
      coreLocalizeTrip(trip, language);
  }, [language]);

  const boundLocalizeTravelStyle = useMemo(() => {
    return (style: TravelStyle) =>
      coreLocalizeTravelStyle(style, language);
  }, [language]);

  const boundFormatCurrency = useMemo(() => {
    return (amount: number) => coreFormatCurrency(amount, language);
  }, [language]);

  const boundFormatNumber = useMemo(() => {
    return (value: number) => coreFormatNumber(value, language);
  }, [language]);

  const boundFormatPercent = useMemo(() => {
    return (value: number) => coreFormatPercent(value, language);
  }, [language]);

  const boundFormatDate = useMemo(() => {
    return (date: string | Date) => coreFormatDate(date, language);
  }, [language]);

  const contextValue = useMemo<LanguageContextType>(() => {
    return {
      language,
      setLanguage,
      t,
      translate,
      langShort,
      localizeContent: boundLocalizeContent,
      localizeTrip: boundLocalizeTrip,
      localizeTravelStyle: boundLocalizeTravelStyle,
      formatCurrency: boundFormatCurrency,
      formatNumber: boundFormatNumber,
      formatPercent: boundFormatPercent,
      formatDate: boundFormatDate,
    };
  }, [
    language,
    t,
    translate,
    langShort,
    boundLocalizeContent,
    boundLocalizeTrip,
    boundLocalizeTravelStyle,
    boundFormatCurrency,
    boundFormatNumber,
    boundFormatPercent,
    boundFormatDate,
  ]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Reusable alias for developers adding future components
export const useLocalization = useLanguage;
