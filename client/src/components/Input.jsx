import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Input.css'

function Input({ id, className, value, onChange, ...attrs }) {
    const classes = classNames(
        'input',
        className
    )
    return (
        <>
            <input name={id} id={id} className={classes} value={value} onChange={onChange} {...attrs} />
        </>
    )
}

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func
}

Input.defaultProps = {
  id: '',
  className: '',
  value: '',
  onChange: () => {}
}

export default Input
