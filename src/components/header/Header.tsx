import useStore from '../../store';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Header() {
    const { page, setPage } = useStore();
    const { t } = useTranslation();
    return (
        <div>
            <p>Header {page}</p>
            <button onClick={() => setPage('project')}>{t('project')}</button>
            <button onClick={() => setPage('contact')}>{t('contact')}</button>
            <button onClick={() => setPage('about')}>{t('about')}</button>
            <LanguageSelector/>
        </div>
    )
}