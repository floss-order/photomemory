import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Error.css'

function Error({ className, text }) {
    const classes = classNames(
        'error',
        className
    )

    return (
        <p className={classes}>
            {text}
        </p>
    )
}

Error.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
}

Error.defaultProps = {
    className: '',
    text: ''
}

export default Error
