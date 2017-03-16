import React from 'react'
import classnames from 'classnames'

import Loader from './Loader'

import '../styles/Button.css'

const Button = ({ children, onClick, loading, disabled, intent, className }) => (
  <button
    className={classnames(
      'Button',
      { 'Button--enabled': !disabled && !loading, 'Button--disabled': disabled },
      intent && `Button--${intent}Intent`,
      className)}
    onClick={onClick}
  >
    {loading
      ? <Loader />
      : children}
  </button>
)

Button.propTypes = {
  children: React.PropTypes.string.isRequired
}

export default Button
