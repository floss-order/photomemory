import React from 'react'
import PropTypes from 'prop-types'

import './Wrapper.css'

function Wrapper({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node
}

Wrapper.defaultProps = {
    children: ''
}

export default Wrapper
