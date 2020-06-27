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
import medesktop from "./img/me-desktop.png"
import memobile from "./img/me-mobile.jpg"
import "./index.scss"
import RepositorySmall from "../components/repositorySmall"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <div className="index-container-bio">
          <div className="bio-img">
            <img className="bio-img-img-1" src={medesktop} alt="cinthia" />
            <img className="bio-img-img-2" src={memobile} alt="cinthia" />
          </div>
          <div className="info-bio">
            <h1>Hello World!</h1>
            <p>
              Welcome to my blog, my name is Cinthia Valero and I'm Venezuelan
              girl living in Sydney Australia. I started this blog, to document
              the process to become a web developer and at the same time share
              with the world all the knowledge I have learned during this time.
              I hope you will enjoy this blog as much as I had fun making it.
            </p>
            <div className="bio-buttons">
              <a className="button-primary" href={`/portfolio/`}>
                check my work
              </a>
              <a className="home-button-visiting-blog" href={`/portfolio/`}>
                or visit my blog <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="conect-icons">
              <a
                href={`https://github.com/cinthialandia`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={`https://www.linkedin.com/in/cinthiaj/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href={`https://twitter.com/_cinthialandia`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        <div className="secondary-background">
          <h1 className="home-title">My latest projects</h1>
          <div className="home-container-repository-small">
            {data.allGithubRepositories.edges.map(node => (
              <RepositorySmall key={node.node.name} repository={node.node} />
            ))}
          </div>
          <div className="home-button-secondary">
            <a className="button-secondary" href={`/portfolio/`}>
              check all my projects
            </a>
          </div>
        </div>
        <div className="big-social-container">
          <div className="big-social-link">
            <a
              href={`https://github.com/cinthialandia`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Cinthialandia
            </a>
            <a
              href={`https://www.linkedin.com/in/cinthiaj/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} /> Cinthia Valero
            </a>
            <a
              href={`https://twitter.com/_cinthialandia`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> _cinthialandia
            </a>
          </div>
        </div>

        <h1 className="home-title">My latest posts</h1>
        <div className="home-container-post">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post key={node.id} node={node} />
          ))}
        </div>
        <div className="home-button-secondary">
          <a className="button-primary" href={`/portfolio/`}>
            View all my posts
          </a>
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
