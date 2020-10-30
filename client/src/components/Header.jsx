import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

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
            <Link to="/">
                <img src={logo} alt="Logo"/>
            </Link>
            <div>
                <Link to="/sign-in">
                    <Button className="btn-sm btn-violet-inverted">sign in</Button>
                </Link>
                <Link to="/sign-up">
                    <Button className="btn-sm btn-violet">sign up</Button>
                </Link>
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