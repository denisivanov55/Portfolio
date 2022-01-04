import './Footer.css';
import {useContext, useState} from "react";
import {AppContext} from "../../App";

function Footer() {

    return (
        <footer className={'footer'}>
            <h4>Результат автоматически<br/> подсчитается, когда вы<br/> заполните все поля</h4>
                <button className={'myButton'}>Сбросить</button>
        </footer>
    )
}

export default Footer;