import React from 'react'

export default function Center(props) {

  const {
    children,
    className = '',
    mobilePadding = false,
  } = props

  return (
    <div className={`gyz-center ${mobilePadding ? 'mobile-padding' : ''} mx-auto ${className}`}>
      {children}
    </div>
  )
}