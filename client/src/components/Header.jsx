import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Header.css'
import logo from '../logo.svg'
import Button from './Button'

function Header({ className }) {
    const classes = classNames(
        'header',
        className
    )
    return (
        <header className={classes}>
            <img src={logo} alt="Logo"/>

            <div>
                <Button className="btn-sm btn-violet-inverted">sign in</Button>
                <Button className="btn-sm btn-violet">sign up</Button>
            </div>
        </header>
    )
}

Header.propTypes = {
    className: propTypes.string,
}
  
Header.defaultProps = {
    className: '',
}

export default Header