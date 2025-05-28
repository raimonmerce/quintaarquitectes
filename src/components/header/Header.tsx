import useStore from '../../store';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import assets from "../../assets/assets"
import { useLocation , Link } from 'react-router-dom';
import type { PageType } from "../../types"
import './Header.css';
import { useEffect, useState  } from "react"
import TextSpecial from '../common/TextSpecial';

export default function Header() {
    const { page, setPage, setProject, landingVisible, isMobile } = useStore();
    const { t } = useTranslation();
    const location = useLocation();
    const [extend, setExtend] = useState(false);

    useEffect(() => {
        const path = location.pathname.toLowerCase();
        const segments = path.split('/').filter(Boolean);
        if (path.includes("/contact")) {
            setPage("contact");
            setProject(null);
        } else if (path.includes("/about")) {
            setPage("about");
            setProject(null);
        } else if (path === "/quintaarquitectes/projects") {
            setPage("project");
        } else if (segments[1] === "projects" && segments.length > 2) {
            setPage("none");
            setProject(segments[2]);
        } else {
            setPage("none");
            setProject(null);
        }
    }, [location.pathname, setPage, setProject]);

    const handleClick = () => {
        setExtend(!extend)
    };

    const setPageExtended = (key: PageType) => {
        setExtend(false)
        setPage(key)
    };

    return (
        <>
            <div className="header-container">
                <div className="header-content">
                <img src={assets.png.quinta} alt="logo" className={`header-logo ${landingVisible ? '' : 'visible'}`}/>
                {isMobile ? (
                        <button className="button-default" onClick={handleClick}>
                            {t('menu')}
                        </button>
                ) : (
                    <div className="header-nav">
                        <Link to="/quintaarquitectes/projects" className={`nav-button ${page === "project" ? "selected" : ""}`} onClick={() => setPageExtended('project')}><TextSpecial text={t('header.project')}/></Link>
                        <Link to="/quintaarquitectes/contact" className={`nav-button ${page === "contact" ? "selected" : ""}`} onClick={() => setPageExtended('contact')}><TextSpecial text={t('header.contact')}/></Link>
                        <Link to="/quintaarquitectes/about" className={`nav-button ${page === "about" ? "selected" : ""}`} onClick={() => setPageExtended('about')}><TextSpecial text={t('header.about')}/></Link>
                        <LanguageSelector />
                    </div>
                )}
                </div>
                {isMobile && 
                    <div className={`header-extender ${extend ? 'extend' : ''}`}>
                        <div className={`header-nav-mobile ${extend ? 'fade-in' : 'fade-out'}`}>
                            <Link to="/quintaarquitectes/projects" className={`nav-button ${page === "project" ? "selected" : ""}`} onClick={() => setPageExtended('project')}>{<TextSpecial text={t('header.project')}/>}</Link>
                            <Link to="/quintaarquitectes/contact" className={`nav-button ${page === "contact" ? "selected" : ""}`} onClick={() => setPageExtended('contact')}>{<TextSpecial text={t('header.contact')}/>}</Link>
                            <Link to="/quintaarquitectes/about" className={`nav-button ${page === "about" ? "selected" : ""}`} onClick={() => setPageExtended('about')}>{<TextSpecial text={t('header.about')}/>}</Link>
                            <LanguageSelector />
                        </div>
                    </div>
                }
            </div>

        </>
    )
}