import React, { createContext, useContext, useState } from 'react';

type Language = 'zh' | 'en';

interface TranslatedContent {
  chinese: string;
  english: string;
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (content: TranslatedContent) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const t = (content: TranslatedContent): string => {
    if (!content) return '';
    return language === 'zh' ? content.chinese : content.english;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};