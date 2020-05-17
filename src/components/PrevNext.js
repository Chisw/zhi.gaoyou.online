import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import stripe from '../img/stripe.png'

export default function PrevNext({ nodes, location }) {

  const flatSidebar = []

  nodes.forEach( node => {
    flatSidebar.push({
      title: node.node.frontmatter.title,
      link: node.node.fields.slug
    })
  })

  const arr = (location.href || '').split('#')[0].split('/').reverse()
  const index = arr[0] ? 0 : 1
  const currentPageLink = decodeURIComponent(`/${arr[index + 1]}/${arr[index]}/`)

  var currIndex = _.findIndex(flatSidebar, item => {
    return item.link === currentPageLink
  })

  const prev = flatSidebar[currIndex - 1] || null
  const next = flatSidebar[currIndex + 1] || null

  return (
    <div
      className="prev-next flex py-8 font-kxzd bg-repeat-x bg-top"
      style={{ backgroundImage: `url(${stripe})`, backgroundSize: 30 }}
    >
      {prev && (
        <Link to={prev.link}>
          <span className="text-xs text-gray-500">上一章</span>
          <p className="text-gray-700 hover:text-gray-900">{prev.title}</p>
        </Link>
      )}
      <div className="flex-grow" />
      {next && (
        <Link to={next.link} className="text-right">
          <span className="text-xs text-gray-500">下一章</span>
          <p className="text-gray-700 hover:text-gray-900">{next.title}</p>
        </Link>
      )}
    </div>
  )
}

