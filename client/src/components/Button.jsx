import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Button.css'

function Button({ children, onClick, className, disabled, active }) {
    const classes = classNames(
        'btn',
        className,
        { active }
    )
    return (
        <button className={classes} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    children: propTypes.node,
    onClick: propTypes.func,
    className: propTypes.string,
    disabled: propTypes.bool,
    active: propTypes.bool
}

Button.defaultProps = {
    children: 'I am a button',
    onClick: () => { },
    className: '',
    disabled: false,
    active: false
}

export default Button
