import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Wave from '../img/wave.png'
import Sidebar from '../components/Sidebar'
import Tocbot from '../components/Tocbot'

const location = window.location

export const AnnalsPageTemplate = ({ title, content, contentComponent, nodes }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient columns is-mobile" style={{background: '#fafafa'}}>
      <div className="container">
        <div className="columns">
          <div className="column is-2">
            <Sidebar nodes={nodes} location={location} />
          </div>
          <div className="column is-7" 
            style={{
              background: '#fff', 
              boxShadow: '0 0 5px rgba(0,0,0,.02), 0 5px 22px -8px rgba(0,0,0,.1)',
              borderRadius: '4px'
            }}
          >
            <div className="section annals-body">
              <h2
                style={{ marginBottom: '4rem', textAlign: 'center', padding: '20px', background: `url(${Wave})`}}
                className="title is-size-3 has-text-weight-bold is-bold-light"
              >
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
          <div className="column is-3">
            <Tocbot className="annals-tocbot" />
          </div>
        </div>
      </div>
    </section>
  )
}

AnnalsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const AnnalsPage = ({ data }) => {
  console.log(data)
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AnnalsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        nodes={data.allMarkdownRemark.edges}
      />
    </Layout>
  )
}

// AnnalsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.arrayOf({
//         node: PropTypes.shape({
//           fields: PropTypes.shape({
//             slug: PropTypes.string
//           }),
//           frontmatter: PropTypes.shape({
//             title: PropTypes.string,
//           })
//         })
//       })
//     })
//   }),
// }

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
