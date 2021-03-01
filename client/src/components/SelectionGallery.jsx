import React, { useEffect, useState} from 'react'
import Image from './Image'

import './SelectionGallery.css'

function SelectionGallery({ images }) {
    const [imgArr, setImgArr] = useState([])
    
    useEffect(() => {
        setImgArr(images)
    })

    function handleImageClick(index) {
        const selectedImgArr = [...imgArr]
        selectedImgArr[index].selected = !imgArr[index].selected
        setImgArr(selectedImgArr)
    }

    return (
        <div className="selection-gallery">
            {imgArr.map((img, index) => (
                <Image 
                key={index}
                src={img.url}
                onClick={() => handleImageClick(index)}
                selected={img.selected}
                />
            ))}
        </div>
    )
}

export default SelectionGallery
