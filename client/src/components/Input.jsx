import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Input.css'

const Input = forwardRef((props, ref) => {
    const { id, className, onChange, ...attrs } = props
    const classes = classNames(
        'input',
        className
    )
    return (
        <>
          <input 
            name={id} 
            id={id} 
            className={classes} 
            onChange={onChange} 
            {...attrs} 
            ref={ref} 
          />
        </>
    )
})

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  id: '',
  className: '',
  onChange: () => {}
}

export default Input
