import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import SelectionGallery from '../components/SelectionGallery'

import './PhotoSelection.css'

function PhotoSelection({ username }) {
    const [images, setImages] = useState([])

    useEffect(() => {
        const img = [
            {
                url: 'https://images.unsplash.com/photo-1614191697800-ff83bd175cee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
            },
    
            {
                url: 'https://images.unsplash.com/photo-1614210482341-321710ec565e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80'
            },
    
            {
                url: 'https://source.unsplash.com/random'
            },
    
            {
                url: 'https://source.unsplash.com/random'
            }
        ]
        setImages(img)
    }, [])

    return (
        <Card>
            <h1 className="section-heading">Select photos</h1>
            <SelectionGallery images={images} />
            <div className="button-container">
                <Button className="btn-sm btn-violet-inverted">back</Button>
                <Button className="btn-sm btn-violet">next</Button>
            </div>
        </Card>
    )
}

export default PhotoSelection
