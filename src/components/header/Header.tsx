import useStore from '../../store';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import assets from "../../assets/assets"
import { useLocation , Link } from 'react-router-dom';
import './Header.css';
import { useEffect } from "react"

export default function Header() {
    const { page, setPage, setProject, landingVisible } = useStore();
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.toLowerCase();
        const segments = path.split('/').filter(Boolean); // removes empty strings
        if (path.includes("/contact")) {
            setPage("contact");
            setProject(null);
        } else if (path.includes("/about")) {
            setPage("about");
            setProject(null);
        } else if (path === "/quintaarquitectes/projects") {
            setPage("project");
            setProject(null);
        } else if (segments[1] === "projects" && segments.length > 2) {
            setPage("none");
            setProject(segments[2]);
        } else {
            setPage("none");
            setProject(null);
        }
    }, [location.pathname, setPage, setProject]);

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