import React, { useEffect } from 'react'
import tocbot from 'tocbot'

export default function TOC(props) {

  const {
    className,
    title,
    showHeading = true,
    headingsOffset = 1,
  } = props

  useEffect(() => {
    tocbot.init({
      tocSelector: `.toc-list-container`,
      contentSelector: `.annals-body`,
      activeLinkClass: `active`,
      headingSelector: `h3, h4, h5, h6`,
      headingsOffset: parseInt(headingsOffset),
    })
  }, [])

  return (
    <nav className={`${className}` } data-cy="toc">
      {(
        showHeading 
          ? <h3 className="mb-2 pb-2 text-sm text-gray-600 border-b">{`${title}`}</h3> 
          : null
      )}
      <div className={`toc-list-container`}></div>
    </nav>
  )
}
