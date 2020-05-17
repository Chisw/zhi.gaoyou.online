import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Sidebar from '../components/Sidebar'
import Tocbot from '../components/Tocbot'
import PrevNext from '../components/PrevNext'
import Center from '../components/Center'
import icon_list from '../img/icon/list.svg'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export function AnnalsPageTemplate({ title, content, contentComponent, nodes, location }) {
  const PageContent = contentComponent || Content

  const [barOpen, setBarOpen] = useState(false)

  useEffect(() => {
    new Viewer(
      document.getElementById('viewerjs-box'),
      { toolbar: false, navbar: false, maxZoomRatio: 3, minZoomRatio: .1 }
    )
    window.Viewer = Viewer
  }, [])

  useEffect(() => {
    const imgs = document.querySelectorAll('.annals-content img')
    imgs && imgs.forEach(img => {
      img.onclick = e => e.preventDefault()
    })
  }, [])

  return (
    <>
      <Center className="pt-12" innerClassName="flex py-8">

        <div
          className={`${barOpen ? 'block' : 'hidden'} lg:hidden fixed z-30 inset-0 bg-black-400`}
          onClick={() => setBarOpen(false)}
          role="presentation"
        >
          <div className="absolute top-0 bottom-0 left-0 w-8/12 p-6 pt-16 overflow-y-auto bg-white shadow-lg">
            <Sidebar nodes={nodes} location={location} />
          </div>
        </div>

        <div className="w-2/12 hidden lg:block">
          <div className="fixed">
            <Sidebar nodes={nodes} location={location} />
          </div>
        </div>

        <div
          className={`
            block lg:hidden transition duration-200
            fixed z-20 left-0 bottom-0 mb-4 ml-4 cursor-pointer
            w-10 h-10 rounded-full bg-black-700 hover:bg-black-800 text-white
            flex justify-center items-center shadow shadow-lg
          `}
          onClick={() => setBarOpen(true)}
          role="presentation"
        >
          <img src={icon_list} alt="list" className="w-4" />
        </div>
        
        <div id="viewerjs-box" className="w-full lg:w-8/12">
          <div className="mb-12 border-2 p-1">
            <h2 className="p-2 text-2xl lg:text-3xl text-center font-kxzd border">
              {title}
            </h2>
          </div>
          <PageContent className="annals-content min-h-640px" content={content} />
          <PrevNext nodes={nodes} location={location} />
        </div>

        <div className="w-2/12 hidden lg:block pl-8">
          <div className="fixed">
            <Tocbot />
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
