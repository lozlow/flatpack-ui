import React from 'react'
import classnames from 'classnames'

import Loader from './Loader'

import '../styles/Box.css'

const Box = ({ children, loading, className, noPad }) => (
  <section className={classnames('Box', { 'Box--loading': loading, 'Box--padding': !noPad }, className)}>
    {loading
      ? <Loader />
      : children}
  </section>
)

Box.propTypes = {
  children: React.PropTypes.string.isRequired,
  loading: React.PropTypes.boolean
}

export default Box
