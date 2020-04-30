import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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
import FA from '../components/FA'

export function AnnalsPageTemplate({ title, content, contentComponent, nodes, location }) {
  const PageContent = contentComponent || Content

  const [barOpen, setBarOpen] = useState(false)

  useEffect(() => {
    new Viewer(document.getElementById('viewerjs-box'), { toolbar: false, navbar: false })
    window.Viewer = Viewer
  }, [])

  useEffect(() => {
    const imgs = document.querySelectorAll('img')
    imgs && imgs.forEach(img => {
      img.onclick = e => e.preventDefault()
    })
  }, [])

  return (
    <div className="gyz-page pt-12 bg-black-100">
      <Center className="flex py-8">
        <div
          className={`page-side-bar ${barOpen ? 'open' : ''} w-2/12 pr-4`}
          onClick={() => { setBarOpen(false) }}
        >
          <Sidebar nodes={nodes} location={location} />
        </div>
        <div
          className={`page-side-bar-switch hidden fixed z-20 left-0 bottom-0 ml-8 ${barOpen ? '-ml-8' : ''} mb-8 w-12 h-12 text-white rounded-full flex justify-center items-center shadow shadow-lg`}
          onClick={() => { setBarOpen(true) }}
        >
          <FA icon="list" />
        </div>
        <div className="page-center w-8/12 bg-white rounded-sm shadow-lg">
          <div id="viewerjs-box" className="center-content px-16 py-12" style={{ minHeight: 640 }}>
            <h2 className="mb-12 p-2 text-3xl text-center font-kxzd" style={{ backgroundSize: '32px', backgroundImage: `url(${Wave})` }}>
              {title}
            </h2>
            <PageContent className="annals-content" content={content} />
          </div>
          <PrevNext nodes={nodes} location={location} />
        </div>
        <div className="page-tocbot w-2/12">
          <div className="fixed">
            <Tocbot title={title} className="annals-tocbot" />
          </div>
        </div>
      </Center>
    </div>
  )
}

AnnalsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const AnnalsPage = ({ data, location }) => {
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

export default AnnalsPage

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
