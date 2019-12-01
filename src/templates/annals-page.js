import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Sidebar from '../components/Sidebar'
import Tocbot from '../components/Tocbot'
import PrevNext from '../components/PrevNext'
import Wave from '../img/wave.png'
import Center from '../components/Center'

export const AnnalsPageTemplate = ({ title, content, contentComponent, nodes, location }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="gyz-page pt-16 bg-black-100">
      <Center className="flex py-8">
        <div className="page-side-bar w-2/12 pr-4">
          <Sidebar nodes={nodes} location={location} />
        </div>
        <div className="page-content w-8/12 bg-white rounded-sm shadow-lg px-16 py-12">
          <h2 className="mb-12 p-2 text-3xl text-center font-kxzd" style={{ backgroundSize: '32px', backgroundImage: `url(${Wave})` }}>
            {title}
          </h2>
          <PageContent className="annals-content" content={content} />
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
