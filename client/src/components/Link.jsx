import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import './Link.css'

function Link({ children, className, to, ...attrs }) {
    const classes = classNames(
        'link',
        className
    )
    
    return (
        <RouterLink className={classes} to={to} {...attrs}>{children}</RouterLink>
    )
}

Link.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    to: PropTypes.string
}

Link.defaultProps = {
    children: null,
    className: '',
    to: ''
}

export default Link
