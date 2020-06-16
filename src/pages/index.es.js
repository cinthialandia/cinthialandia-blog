import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"

export default function Home({ data }) {
  return (
    <Layout lang="es">
      <div>
        <h1>Últimas publicaciones</h1>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id} node={node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { fields: { langKey: { eq: "es" } } }
    ) {
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
    allGithubRepositories(
      sort: { order: DESC, fields: createdAt }
      filter: {
        repositoryTopics: {
          edges: {
            elemMatch: { node: { topic: { name: { eq: "portfolio" } } } }
          }
        }
      }
      limit: 3
    ) {
      edges {
        node {
          name
          id
          homepageUrl
          description
          openGraphImageUrl
          url
          createdAt
        }
      }
    }
  }
`
