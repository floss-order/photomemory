import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './ListItem.css'

function ListItem ({ children, className }) {
  const classes = classNames(
    'list_item',
    className,
  )
  return (
    <li className={classes}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

ListItem.defaultProps = {
  children: null,
  className: '',
}

export default ListItem