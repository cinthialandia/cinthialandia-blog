import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./portfolio.css"

const Repository = ({ repository }) => {
  return (
    <>
      <div className="project">
        <div className="card-container">
          <img className="photo" src={repository.openGraphImageUrl}></img>
          <div className="repository-description">{repository.description}</div>
          <div className="container-repository-and-demo">
            <a href={repository.url}>Repository</a>
            <a href={repository.homepageUrl}>Live demo</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Portfolio({ data }) {
  return (
    <Layout>
      <h1>Portfolio</h1>
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
