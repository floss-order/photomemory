import React, { useState } from 'react'

import './PhotoSelection.css'
import Card from '../components/Card'
import Label from '../components/Label'
import Dropdown from '../components/Dropdown'


function sortByDate(date, dateOptions) {
    switch(date.value) {
        case dateOptions[0].value: {
            
        } 
    }
}


function PhotoSelection() {
    const dateOptions = [
        { value: "all", label: "All" },
        { value: "this month", label: "This month" },
        { value: "last month", label: "Last month" },
        { value: "this year", label: "This year" },
        { value: "last year", label: "Last year" }
    ]
    const popularOptions = [
        { value: 'default', label: 'Default'}, 
        { value: 'likes', label: 'Likes'}, 
        { value: 'comments', label: 'Comments'}
    ]
    const orderOptions = [
        { value: 'ascending', label: 'Ascending'}, 
        { value: 'descending', label: 'Descending'}
    ]

    const [dateValue, setDateValue] = useState(dateOptions[0])
    const [popularValue, setPopularValue] = useState(popularOptions[0])
    const [orderValue, setOrderValue] = useState(orderOptions[0])

    function handleDateValue(date) {
        setDateValue(date)
    }

    function handlePopularValue(popular) {
        setPopularValue(popular)
    }

    function handleOrderValue(order) {
        setOrderValue(order)
    }

    return (
        // <Card>
            // <h1>Select photos</h1>

            // <div className="gallery-container"> 
                // <Label text="Filter"/>
                
                <div className="filter-container">
                    <Dropdown 
                    value={dateValue}
                    options={dateOptions}
                    onChange={handleDateValue}
                    />

                    <Dropdown 
                    value={popularValue}
                    options={popularOptions}
                    onChange={handlePopularValue}
                    />

                    <Dropdown 
                    value={orderValue}
                    options={orderOptions}
                    onChange={handleOrderValue}
                    />
                </div>

            // </div>
        // </Card>
    )
}

export default PhotoSelection
