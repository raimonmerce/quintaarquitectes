import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
}

export default  function LanguageSelector({}:LanguageSelectorProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages = ["cat", "es", "en"]; // you can add more languages here
  const currentLang = i18n.language;

  return (
    <div>
      <select
        value={currentLang}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
