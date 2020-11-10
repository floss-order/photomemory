import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Error.css'

function Error({ className, children }) {
    const classes = classNames(
        'error',
        className
    )

    return (
        <p className={classes}>
            {children}
        </p>
    )
}

Error.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

Error.defaultProps = {
    className: '',
    children: null
}

export default Error
