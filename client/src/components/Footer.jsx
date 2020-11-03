import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Footer.css'
import List from './List'
import ListItem from './ListItem'
import Link from './Link'

function Footer({ className }) {
    const classes = classNames(
        'footer',
        className
    )
    return (
        <footer>
            <p>© 2020 PhotoMemory. All rights reserved</p>
            <nav>
                <List>
                    <ListItem>
                        <Link className="link_black" to="/about/contact">Contact</Link>
                    </ListItem>

                    <ListItem>
                        <Link className="link_black" to="/about/faq">FAQ</Link>
                    </ListItem>

                    <ListItem>
                        <Link className="link_black" to="/about/privacy_policy">Privacy policy</Link>
                    </ListItem>
                    
                    <ListItem>
                        <Link className="link_black" to="/about/terms_of_service">Terms of service</Link>
                    </ListItem>
                </List>
            </nav>
        </footer>
    )
}

Footer.propTypes = {
    className: propTypes.string
}

Footer.defaultProps = {
    className: ''
}

export default Footer
