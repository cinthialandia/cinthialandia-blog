import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./portfolio.css"

const Repository = ({ repository }) => {
  return (
    <>
      <div className="project">
        <div className="card-container">
          <div className="photo">
            <img src={repository.openGraphImageUrl}></img>
          </div>

          <div className="repository-description">{repository.description}</div>
          <div className="container-repository-and-demo">
            <a href={repository.url} target="_blank">
              Repository
            </a>
            <a href={repository.homepageUrl} target="_blank">
              Live demo
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

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
