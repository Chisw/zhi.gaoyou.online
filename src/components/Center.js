import React from 'react'

export default function Center(props) {
  const {
    style = {},
    className = '',
    innerClassName = '',
    children,
  } = props

  return (
    <div className={`relative w-full ${className}`} style={style}>
      <div className={`relative z-10 w-full h-full px-4 md:px-8 xl:w-1320px mx-auto ${innerClassName}`}>
        {children}
      </div>
    </div>
  )
}