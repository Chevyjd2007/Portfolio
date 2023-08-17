import React from 'react'
import ProfileImg from "../../assets/Chev.png"
import zeldaFairies from "../../assets/zelda-fairies-1.png"
import jojo1 from "../../assets/Jojo_Menace_1.png"
import jojo2 from "../../assets/Jojo_Menace_1.png"

import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BsDiscord } from "react-icons/bs";
import  "./home.css";
import CV from "../../assets/Josias_Chevalier_Resume.pdf"

const Home = () => {
  return <section className='home' id='home'>
    <div className="home__wrapper">
    <div className="home__container container">
        <p className="home__subtitle text-cs">
            What's up, <span>My name Is</span>
        </p>

        <h1 className="home__title text-cs"><span>Josias</span> Chevalier</h1>

        <p className="home__job">
            <span className="text-cs">I have experience with</span> <b>Software Development</b>
        </p>

        <div className="home__img-wrapper">
            <div className="home__banner">
                <img src={ProfileImg} alt="" className='home__profile' />
            </div>

            <img src={jojo1} alt="" className=" jojo__1" />
            <img src={jojo2}  alt="" className=" jojo__2" />
            <img src={jojo2} alt="" className=" jojo__3" />
        </div>

        <p className="home__text">
            Based in Miami, Florida. I have a Bachelor of Arts in Computer Science from Florida International University.
        </p>

        <div className="home__socials">
            <a href="https://github.com/Chevyjd2007" className="home__social-link">
                <RxGithubLogo/>
            </a>
            <a href="https://www.linkedin.com/in/josias-chevalier-10882964/" className="home__social-link">
                <RxLinkedinLogo/>
            </a>
            <a href="https://discordapp.com/users/che.vy" className="home__social-link">
                <BsDiscord/>
            </a>
        </div>

        <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">Download CV</a>

            <a href="" className="hero__link text-cs">My Skills</a>
        </div>
    </div>
    </div>
  </section>;
    
  
}

export default Home