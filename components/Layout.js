import React, { Children } from 'react'
import _ from 'lodash'
import invariant from 'invariant'
import classnames from 'classnames'

import '../styles/Layout.css'

function ensureValidChildren (children) {
  const types = _.uniq(Children.map(children, (child) => child.type))
  const type = _.first(types)
  invariant(types.length === 1 && _.includes([Column, Row], type), 'Children must be of the same type (and either a Row or Column)')

  return type
}

export default function Layout ({ className, children }) {
  const type = ensureValidChildren(children)
  const direction = (type === Row) ? 'column' : 'row'

  return (
    <div className={classnames('Layout', className)} style={{ flexDirection: direction }}>
      {children}
    </div>
  )
}

export function Column ({ render, children, width = 'auto', className }) {
  let renderable
  if (render) {
    renderable = render()
  } else {
    ensureValidChildren(children)
    renderable = children
  }

  return (
    <div className={classnames('Layout-column', { 'Layout-column--grow': width === 'auto' }, className)} style={{ flexBasis: width }}>
      {renderable}
    </div>
  )
}

export function Row ({ render, children, height = 'auto', className }) {
  let renderable
  if (render) {
    renderable = render()
  } else {
    ensureValidChildren(children)
    renderable = children
  }

  return (
    <div className={classnames('Layout-row', { 'Layout-row--grow': height === 'auto' }, className)} style={{ flexBasis: height }}>
      {renderable}
    </div>
  )
}
