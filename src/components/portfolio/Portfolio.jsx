import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import { Projects } from './Projects';
import "./portfolio.css"

const allNavList = Projects.map((project) => project.category);

const Portfolio = () => {
    const [projectItems, setMenuItems] = useState(Projects);
  return (
    <section className='portfolio section' id='work'>
        <h2 className='section__title text-cs'>Portfolio</h2>
        <p className='section__subtitle'>My <span>Projects</span></p>

        <List/>

        <div className="portfolio__container container grid">
            <Items projectItems={projectItems}/>
        </div>
    </section>
  )
}

export default Portfolio