import React from 'react'
import classnames from 'classnames'

import '../styles/Heading.css'

const Heading = ({ children, className }) => (
  <span className={classnames('Heading', className)}>
    {children}
  </span>
)

Heading.propTypes = {
  children: React.PropTypes.string.isRequired
}

export default Heading
