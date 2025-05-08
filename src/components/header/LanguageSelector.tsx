import { useTranslation } from "react-i18next";

export default  function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages = ["cat", "es", "en"];
  const currentLang = i18n.language;

  return (
    <div>
      <select
        value={currentLang}
        className={"language-selector"}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang} className={"language-options"}>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
