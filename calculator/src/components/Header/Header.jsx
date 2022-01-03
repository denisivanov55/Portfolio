import {Link} from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className={'header'}>
            <h1 className={'header__title'}>Z-критерий синдрома Марфана</h1>
            <div className={'header__links'}>
                <Link to={'/'} className={'link header__link'}>Расчет</Link>
                <Link to={'about'} className={'link header__link'}>Информация</Link>
            </div>
        </header>
    )

}

export default Header;