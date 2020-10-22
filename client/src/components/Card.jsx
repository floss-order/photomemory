import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Card.css'

function Card({ children, className }) {
    const classes = classNames(
        'card',
        className
    )
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: propTypes.node,
    className: propTypes.string
}

Card.defaultProps = {
    children: 'This is the card',
    className: ''
}

export default Card
