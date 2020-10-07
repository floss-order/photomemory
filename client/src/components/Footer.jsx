import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Footer.css'
import List from './List'
import ListItem from './ListItem'

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
                        Contact
                    </ListItem>

                    <ListItem>
                        FAQ
                    </ListItem>

                    <ListItem>
                        Privacy policy
                    </ListItem>
                    
                    <ListItem>
                        Terms of service
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
