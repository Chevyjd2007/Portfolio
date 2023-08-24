import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import { Projects } from './Projects';
import "./portfolio.css"
import { AnimatePresence } from 'framer-motion';
import shape1 from "../../assets/shape-1.png"

const allNavList = ['all' , ...new Set(Projects.map((project) => project.category))];

const Portfolio = () => {
    const [projectItems, setMenuItems] = useState(Projects);
    const[navList, setCategories] = useState(allNavList);

    const filterItems = (category) => {
      if(category === 'all') {
        setMenuItems(Projects);
        return;
      }
      
      const newProjectItems = Projects.filter(
        (item) => item.category === category
      );

      setMenuItems(newProjectItems);
    };

  return (
    <section className='portfolio section' id='portfolio'>
        <h2 className='section__title text-cs'>Portfolio</h2>
        <p className='section__subtitle'>My <span>Projects</span></p>

        <List list={navList} filterItems={filterItems}/>

        <div className="portfolio__container container grid">
            <AnimatePresence initial={false}>
            <Items projectItems={projectItems}/>
            </AnimatePresence>
        </div>
        <div className="section__deco deco__right">
          <img src={shape1} alt='' className='shape'/>
        </div>
    </section>
  )
}

export default Portfolio