import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function Navigation() {
    const {t, i18n} = useTranslation();
    const handleLanguageChange = (language) => {
        console.log(language);
        i18n.changeLanguage(language);
    }
    return (
        <nav>
            <ul>
                <li><Link to="/">{t('nav.main-page')}</Link></li>
                <li><Link to="/professors">{t('nav.professors')}</Link></li>
                <li><Link to="/lectures">{t('nav.lectures')}</Link></li>
                <li><Link to="/departments">{t('nav.departments')}</Link></li>
                <li className={"lang"}>
                    <button onClick={() => handleLanguageChange(`pl`)}>PL</button>
                </li>
                <li className={"lang"}>
                    <button onClick={() => handleLanguageChange(`en`)}>EN</button>
                </li>

            </ul>
        </nav>
    )
}

export default Navigation
