import { useTranslation } from 'react-i18next';
import "./Footer.css"

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="footer-container">
            &copy; {new Date().getFullYear()} Quinta Arquitectes. {t("footer.rights")} {t("footer.madeby")}
            &nbsp;
            <a className="footer-link" href="https://www.raimonmerce.com/" target="_blank" rel="noopener noreferrer">
                Ray
            </a>
        </div>
    )
}