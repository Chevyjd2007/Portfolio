import React, { useState } from 'react'

const Card = (props) => {
    const [show, setShow] = useState(false);

  return (
   <div className="resume__item">
    <div className="resume__header" onClick={() => setShow(!show)}>
        <h3 className="resume__subtitle">
            {props.title}
        </h3>
        <span className="resume__icon">{show ? '-' : '+'}</span>
    </div>

    <div className={`${show ? 'show-content' : ''} resume__content`}>
        <div className="resume__date-title">
            <h3 className="resume__title">
                {props.subtitle}
            </h3>
            <span className="resume__date text-cs">
                {props.date}
            </span>
        </div>

        <p className="resume__description">
            {props.description}
        </p>
    </div>
   </div>
  )
}

export default Card