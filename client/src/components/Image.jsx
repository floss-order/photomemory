import React from 'react'

import './Image.css'

function Image({ selected, src, alt, onClick, ...attrs }) {
    return (
        <div className="image" onClick={onClick}>
            <img 
            className="image__img"
            selected={selected} 
            src={src} 
            alt={alt} 
            {...attrs} 
            />
            <div className={selected ? "image__overlay" : undefined}></div>
        </div>
    )
}

export default Image
