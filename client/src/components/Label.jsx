import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Label.css'

function Label({ className, text, htmlFor, ...attrs}) {
    const classes = classNames(
        'label',
        className
    )

    return (
        <label className={classes} htmlFor={htmlFor} {...attrs}>{text}</label>
    )
}

Label.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    htmlFor: PropTypes.string
}

Label.defaultProps = {
    className: '',
    text: 'label',
    htmlFor: ''
}

export default Label
