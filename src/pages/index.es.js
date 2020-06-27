import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"
import cinthialandia from "./img/logito.png"
import "./index.css"
import RepositorySmall from "../components/repositorySmall"
import mecinthia from "./img/me-cinthia.png"

export default function Home({ data }) {
  return (
    <Layout lang="es">
      <div>
        <div className="index-container-bio">
          <div className="bio-img">
            <img className="bio-img-img" src={mecinthia} />
          </div>
          <div className="info-bio">
            <h1>Hola Mundo!</h1>
            <p>
              Bienvenido a mi blog, mi nombre es Cinthia Valero y soy una chica
              venezolana que vive en Sydney, Australia. Comencé este blog para
              documentar el proceso para convertirme en desarrollador web y al
              mismo tiempo compartir con el mundo todo el conocimiento que he
              aprendido durante este tiempo. Espero que disfruten este blog
              tanto como me divertí haciéndolo.
            </p>
            <div>
              <a className="button-primary" href={`/portfolio/`}>
                Mira mi trabajo
              </a>
              <a className="home-button-visiting-blog" href={`/portfolio/`}>
                o visita mi blog <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="conect-icons">
              <a href={`https://github.com/cinthialandia`} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={`https://www.linkedin.com/in/cinthiaj/`} target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href={`https://twitter.com/_cinthialandia`} target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        <h2 className="home-title">Mi ultimos proyectos</h2>
        <div className="home-container-repository-small">
          {data.allGithubRepositories.edges.map(node => (
            <RepositorySmall key={node.node.name} repository={node.node} />
          ))}
        </div>
        <h2 className="home-title">Mis ultimos posts</h2>
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
