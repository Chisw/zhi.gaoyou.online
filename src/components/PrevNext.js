import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

function PrevNext({ nodes, location }) {

    const flatSidebar = []

    nodes.forEach( node => {
        flatSidebar.push({
            title: node.node.frontmatter.title,
            link: node.node.fields.slug
        })
    })

    var currIndex = _.findIndex(flatSidebar, item => {
        return item.link === decodeURIComponent(location.pathname)
    })

    const prev = flatSidebar[currIndex - 1] || null
    const next = flatSidebar[currIndex + 1] || null

    return (
        <div className="prev-next-container">
            {
                prev
                    ? (
                        <Link to={prev.link} className="container-section prev font-kxzd">
                            <span>上一章</span>
                            <p>{prev.title}</p>
                        </Link>
                    )
                    : (
                        <div className="container-section"></div>
                    )
            }
            {
                next
                    ? (
                        <Link to={next.link} className="container-section next font-kxzd">
                            <span>下一章</span>
                            <p>{next.title}</p>
                        </Link>
                    )
                    : (
                        <div className="container-section"></div>
                    )
            }

            
        </div>
    )
}

export default PrevNext

