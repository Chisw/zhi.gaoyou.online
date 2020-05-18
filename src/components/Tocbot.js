import React, { useEffect } from 'react'
import tocbot from 'tocbot'

export default function TOC() {

  useEffect(() => {
    tocbot.init({
      tocSelector: `.toc-list-container`,
      contentSelector: `.annals-content`,
      activeLinkClass: `active`,
      headingSelector: `h3, h4, h5, h6`,
    })
  }, [])

  return (
    <nav>
      <h3 className="mb-2 text-base text-gray-600 font-light">章节概要</h3>
      <div className="toc-list-container"></div>
    </nav>
  )
}
