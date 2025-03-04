import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "../lang/en.json";
import pl from "../lang/pl.json";

// Typy
type Language = "en" | "pl";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface Translations {
  [key: string]: string;
}
const translations: Record<Language, Translations> = { en, pl };

interface LanguageContextType {
  t: (key: string) => string;
  changeLanguage: (lng: Language) => void;
  language: Language;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const storedLang = localStorage.getItem("language") as Language;
    return storedLang === "en" || storedLang === "pl" ? storedLang : "pl";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider
      value={{ t, changeLanguage: setLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
