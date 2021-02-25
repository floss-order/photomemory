import React, { useState } from 'react'
import Card from '../components/Card'

import './PhotoSelection.css'

function PhotoSelection({ username }) {
    const images = [
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

    return (
        <Card>
            <h1 className="section-heading">Select photos</h1>
            <div className="images">
                {images.map(image => (
                    <img className="images__item" src={image.url} />)
                )}
            </div>
        </Card>
    )
}

export default PhotoSelection
