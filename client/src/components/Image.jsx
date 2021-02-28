import React from 'react'

import './Image.css'

function Image({ selected, src, alt, onClick, ...attrs }) {
    return (
        <div className="image">
            <img 
            className="image__img"
            selected={isSelected} 
            onClick={onClick}
            src={src} 
            alt={alt} 
            {...attrs} 
            />
            <div className={isSelected && "image__overlay"}></div>
        </div>
    )
}

export default Image
