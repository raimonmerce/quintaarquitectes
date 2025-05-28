import TextSpecial from "../common/TextSpecial"
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation();
    return (
        <>
            <h2 style={{margin: "0.5em"}}><TextSpecial text={t('header.about')}/></h2>
        </>
    )
}