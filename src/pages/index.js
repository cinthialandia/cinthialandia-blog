import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"
import cinthialandia from "./img/logito.png"
import "./index.css"
import RepositorySmall from "../components/repositorySmall"
import Bio from "../components/bio"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <Bio />
        <div className="cinthialandia">
          <img src={cinthialandia} />
        </div>
        <h2 className="home-title">My latest projects</h2>
        <div className="home-container-repository-small">
          {data.allGithubRepositories.edges.map(node => (
            <RepositorySmall key={node.node.name} repository={node.node} />
          ))}
        </div>
        <h2 className="home-title">My latest posts</h2>
        <div className="home-container-post">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post key={node.id} node={node} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { fields: { langKey: { eq: "en" } } }
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
