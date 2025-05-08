import useStore from '../../store';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import assets from "../../assets/assets"
import './Header.css';

export default function Header() {
    const { page, setPage, landingVisible } = useStore();
    const { t } = useTranslation();
    return (
        <div className="header">
            {landingVisible ?
                    <div/>
                :
                    <img src={assets.png.quinta} alt="logo" className="header-logo"/>
            }
            <div className="header-nav">
                <button className={page === "project" ? "selected" : ""} onClick={() => setPage('project')}>{t('project')}</button>
                <button className={page === "contact" ? "selected" : ""} onClick={() => setPage('contact')}>{t('contact')}</button>
                <button className={page === "about" ? "selected" : ""} onClick={() => setPage('about')}>{t('about')}</button>
                <LanguageSelector />
            </div>
        </div>
    )
}