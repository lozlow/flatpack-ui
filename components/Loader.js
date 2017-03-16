import React from 'react'

import '../styles/Loader.css'

export default function Loader ({ color }) {
  return (
    <i className='Loader'>
      <span className='Loader-1' style={{ backgroundColor: color }} />
      <span className='Loader-2' style={{ backgroundColor: color }} />
      <span className='Loader-3' style={{ backgroundColor: color }} />
    </i>
  )
}

Loader.propTypes = {
  color: React.PropTypes.string
}
