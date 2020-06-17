import React from "react"
import Layout from "../components/layout"
import Repository from "../components/repository"
import { graphql } from "gatsby"
import "./portfolio.css"

export default function Portfolio({ data }) {
  return (
    <Layout>
      <div className="portfolio-title">Portfolio</div>
      <div className="container">
        {data.allGithubRepositories.edges.map(node => (
          <Repository key={node.node.name} repository={node.node} />
        ))}
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
        }
      }
    }
  }
`
