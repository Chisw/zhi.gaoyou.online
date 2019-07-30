import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Wave from '../img/wave.png'
import Sidebar from '../components/Sidebar'
import Tocbot from '../components/Tocbot'
import PrevNext from '../components/PrevNext'
import '../components/annals.css'

export const AnnalsPageTemplate = ({ title, content, contentComponent, nodes, location }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient columns is-mobile" style={{background: '#fafafa'}}>
      <div className="container">
        <div className="columns">
          <div className="column is-2">
            <Sidebar nodes={nodes} location={location} />
          </div>
          <div className="column is-8">
            <div             style={{
              background: '#fff', 
              boxShadow: '0 0 5px rgba(0,0,0,.02), 0 5px 22px -8px rgba(0,0,0,.1)',
              padding: '0'
            }}>
            <div className="section annals-body" style={{padding: '48px 60px'}}>
              <h2
                style={{ marginBottom: '4rem', textAlign: 'center', padding: '20px', backgroundSize: '32px', backgroundImage: `url(${Wave})`}}
                className="title is-size-3 has-text-weight-bold is-bold-light"
              >
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
            <PrevNext nodes={nodes} location={location} />
            </div>
          </div>
          <div className="column is-2">
            <div style={{position: 'fixed'}}>
              <Tocbot title={title} className="annals-tocbot" />
              <span className="back-to-top" onClick={()=> {
                document.documentElement.scrollTop = 0
              }}>回到顶部</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AnnalsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const AnnalsPage = ({ data, location }) => {
  // console.log(data)
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
