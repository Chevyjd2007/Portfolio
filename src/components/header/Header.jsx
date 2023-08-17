import React, { useEffect, useState } from 'react'
import { Links } from './Links'
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BsDiscord } from "react-icons/bs";
import { BsSun, BsMoon} from "react-icons/bs";
import "./header.css";
import { Link } from 'react-scroll';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { animateScroll } from 'react-scroll';

const Header = () => {
// This will be used to trigger the current state of showing the menu or not
const [menu, setMenu] = useState(false);

const [scroll, setScroll] = useState(false);

const [theme, setTheme] = useState('light-theme');

const scrollTop = () => {
    animateScroll.scrollToTop();
};

const changeNav = () => {
    if(window.scrollY >= 80) {
        setScroll(true); 
    } else {
            setScroll(false);
        }
    }

useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

useEffect(() => {
    document.body.classList.toggle('no-scroll', menu);
}, [menu]);

useEffect(() => {
    document.documentElement.className = theme;
}, [theme])

  return (
    <header className={`${scroll ? 'scroll-header' : ''} header`}>
        <nav className="nav">
            <Link to="/" onClick={scrollTop} href="" className="nav__logo text-cs">Chevy</Link>

            <div className={`${menu ? 'nav__menu show-menu' : 'nav__menu'}`}>
               <div className="nav__data">
               <ul className="nav__list">
                    {Links.map(({name, path}, index) => {
                        return (
                            <li className="nav_item" key={index}>
                                <Link className="nav__link text-cs" to={path} spy={true} hashSpy={true} smooth={true} offset={-150} duration={500} onClick={() => setMenu(!menu)}>
                                    {name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="header__socials">
                    <a href="https://github.com/Chevyjd2007" className="header__social-link">
                        <RxGithubLogo/>
                    </a>
                    <a href="https://www.linkedin.com/in/josias-chevalier-10882964/" className="header__social-link">
                        <RxLinkedinLogo/>
                    </a>
                    <a href="https://discordapp.com/users/che.vy" className="header__social-link">
                        <BsDiscord/>
                    </a>
                </div>
               </div>
            </div>
            <div className="nav__btns">
                <div className="theme__toggle">
                    <BsSun />
                </div>
                <div className={`${menu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setMenu(!menu)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header