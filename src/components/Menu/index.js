import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo TechFlix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;