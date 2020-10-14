import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"

export default function Blog({ data }) {
  return (
    <Layout lang="es">
      <h1 className="lates-post">Ultimos posts</h1>
      <h4 className="number-post">{data.allMarkdownRemark.totalCount} posts</h4>
      <div className="container-blog">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id} node={node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { langKey: { eq: "es" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                }
              }
            }
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
