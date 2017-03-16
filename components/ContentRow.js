import React from 'react'
import classnames from 'classnames'
import invariant from 'invariant'

import '../styles/ContentRow.css'

const ContentRow = ({ children, className, alignRight, spaceItems }) => {
  invariant(!(alignRight && spaceItems), 'alignRight cannot be used in conjuction with spaceItems')

  return (
    <div className={classnames('ContentRow', { 'ContentRow--alignRight': alignRight, 'ContentRow--spaceAround': spaceItems }, className)}>
      {children}
    </div>
  )
}

ContentRow.propTypes = {
  children: React.PropTypes.string.isRequired
}

export default ContentRow
