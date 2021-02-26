import React from 'react'
import Image from './Image'

import './SelectionGallery.css'

function SelectionGallery({ images }) {
    return (
        <div className="selection-gallery">
            {images.map((image, index) => (
                <Image 
                key={index}
                src={image.url}
                />
            ))}
        </div>
    )
}

export default SelectionGallery
