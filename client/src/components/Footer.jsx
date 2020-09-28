import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Footer.css'

function Footer({ children, className }) {
    const classes = classNames(
        'footer',
        className
    )
    return (
        <footer>
            <p>© 2020 PhotoMemory. All rights reserved</p>
            <nav>
                <ul>
                    <li>
                        <a>Contact</a>
                    </li>
                    
                    <li>
                        <a>FAQ</a>
                    </li>
                    
                    <li>
                        <a>Privacy policy</a>
                    </li>
                    
                    <li>
                        <a>Terms of service</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

Footer.propTypes = {
    children: propTypes.node
}

Footer.defaultProps = {
    children: 'I am a footer'
}

export default Footer
