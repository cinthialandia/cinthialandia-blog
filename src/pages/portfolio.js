import React from "react"
import Layout from "../components/layout"
import Repository from "../components/repository"
import { graphql } from "gatsby"
import "./portfolio.css"

export default function Portfolio({ data }) {
  return (
    <Layout>
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="background-color-portfolio">
        <div className="container-portfolio">
          {data.allGithubRepositories.edges.map(node => (
            <Repository key={node.node.name} repository={node.node} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allGithubRepositories(
      filter: {
        repositoryTopics: {
          edges: {
            elemMatch: { node: { topic: { name: { eq: "portfolio" } } } }
          }
        }
      }
      sort: { order: DESC, fields: createdAt }
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
          owner {
            login
          }
        }
      }
    }
  }
`
