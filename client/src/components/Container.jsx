import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

import './Container.css'

function Container({ className, children }) {
    const classes = classNames(
        'container',
        className
    )
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
}

Container.defaultProps = {
    children: '',
    className: '',
}

export default Container
