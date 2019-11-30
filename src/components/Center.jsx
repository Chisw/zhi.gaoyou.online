import React from 'react'

export default function Center(props) {

  const {
    children,
    className = '',
  } = props

  return (
    <div className={`gyz-center mx-auto ${className}`}>
      {children}
    </div>
  )
}