import React, { useEffect, useState } from 'react'
import { Links } from './Links'
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BsDiscord } from "react-icons/bs";
import { BsSun, BsMoon} from "react-icons/bs";
import "./header.css";
import { Link } from 'react-scroll';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { animateScroll } from 'react-scroll';

// Stores user's specified theme
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
};

const Header = () => {
// This will be used to trigger the current state of showing the menu or not
const [menu, setMenu] = useState(false);

const [scroll, setScroll] = useState(false);

// The theme will be set based on the current value of theme in storage
const [theme, setTheme] = useState(getStorageTheme());

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

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme("dark-theme") 
        } else {
            setTheme("light-theme")
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
        localStorage.setItem('theme', theme);
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
                <div className="theme__toggle" onClick={toggleTheme}>
                    {theme === "light-theme" ? <BsMoon /> : <BsSun/>}
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