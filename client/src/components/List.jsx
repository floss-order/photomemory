import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './List.css'

function List ({ children, className, tag: Tag }) {
  const classes = classNames(
    'list',
    className,
  )
  return (
    <Tag className={classes}>
      {children}
    </Tag>
  )
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

List.defaultProps = {
  children: null,
  className: '',
  tag: 'ul'
}

export default List