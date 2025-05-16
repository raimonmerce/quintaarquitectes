import useStore from '../../store';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import assets from "../../assets/assets"
import { useLocation , Link } from 'react-router-dom';
import './Header.css';
import {useEffect} from "react"

export default function Header() {
    const { page, setPage, landingVisible } = useStore();
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.toLowerCase();
        console.log("path", path, location);

        if (path.includes("contact")) {
            setPage("contact");
        } else if (path.includes("about")) {
            setPage("about");
        } else if (path.includes("project")) {
            setPage("project");
        }
    }, [location.pathname, setPage]);

    return (
        <div className="header">
            {landingVisible ?
                    <div className="header-logo"/>
                :
                    <img src={assets.png.quinta} alt="logo" className="header-logo"/>
            }
            <div className="header-nav">
                <Link to="/quintaarquitectes/projects" className={`nav-button ${page === "project" ? "selected" : ""}`} onClick={() => setPage('project')}>{t('project')}</Link>
                <Link to="/quintaarquitectes/contact" className={`nav-button ${page === "contact" ? "selected" : ""}`} onClick={() => setPage('contact')}>{t('contact')}</Link>
                <Link to="/quintaarquitectes/about" className={`nav-button ${page === "about" ? "selected" : ""}`} onClick={() => setPage('about')}>{t('about')}</Link>
                <LanguageSelector />
            </div>
        </div>
    )
}