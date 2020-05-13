import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Sidebar from '../components/Sidebar'
import Tocbot from '../components/Tocbot'
import PrevNext from '../components/PrevNext'
import Wave from '../img/wave.png'
import Center from '../components/Center'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export function AnnalsPageTemplate({ title, content, contentComponent, nodes, location }) {
  const PageContent = contentComponent || Content

  const [barOpen, setBarOpen] = useState(false)

  useEffect(() => {
    new Viewer(document.getElementById('viewerjs-box'), { toolbar: false, navbar: false, maxZoomRatio: 3, minZoomRatio: .1 })
    window.Viewer = Viewer
  }, [])

  useEffect(() => {
    const imgs = document.querySelectorAll('img')
    imgs && imgs.forEach(img => {
      img.onclick = e => e.preventDefault()
    })
  }, [])

  return (
    <>
      <Center className="md:pt-12 md:bg-black-10" innerClassName="flex py-8">
        <div
          className={`page-side-bar ${barOpen ? 'open' : ''} w-2/12 pr-4 hidden md:block`}
          onClick={() => setBarOpen(false) }
          role="presentation"
        >
          <Sidebar nodes={nodes} location={location} />
        </div>
        <button
          className={`page-side-bar-switch hidden fixed z-20 left-0 bottom-0 ml-8 ${barOpen ? '-ml-8' : ''} mb-8 w-12 h-12 text-white rounded-full flex justify-center items-center shadow shadow-lg`}
          onClick={() => setBarOpen(true) }
        >
          <span>三</span>
        </button>
        <div className="page-center w-full md:w-8/12 bg-white rounded-sm shadow-none md:shadow-lg">
          <div id="viewerjs-box" className="center-content px-0 md:px-16 py-12" style={{ minHeight: 640 }}>
            <h2 className="mb-12 p-2 text-3xl text-center font-kxzd" style={{ backgroundSize: '32px', backgroundImage: `url(${Wave})` }}>
              {title}
            </h2>
            <PageContent className="annals-content" content={content} />
          </div>
          <PrevNext nodes={nodes} location={location} />
        </div>
        <div className="page-tocbot w-2/12 hidden md:block">
          <div className="fixed">
            <Tocbot title={title} className="annals-tocbot" />
          </div>
        </div>
      </Center>
    </>
  )
}

export default function AnnalsPage({ data, location }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AnnalsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        nodes={data.allMarkdownRemark.edges}
        location={location}
      />
    </Layout>
  )
}

export const AnnalsPageQuery = graphql`
  query AnnalsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000,
      sort: {order: ASC, fields: frontmatter___order},
      filter: {frontmatter: {templateKey: {eq: "annals-page"}}},
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            vol
            order
          }
        }
      }
    }
  }
`
