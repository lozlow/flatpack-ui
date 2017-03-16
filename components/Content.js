import React from 'react'
import classnames from 'classnames'

import '../styles/Content.css'

const Content = ({ children, className }) => (
  <article className={classnames('Content', className)}>
    {children}
  </article>
)

Content.propTypes = {
  children: React.PropTypes.string.isRequired
}

export default Content
