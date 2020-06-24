import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import "./layout.scss"
import australiasvg from "./img/australia.svg"
import spainsvg from "./img/spain.svg"

const LangSelect = ({ lang }) =>
  lang === "es" ? (
    <Link to={`/`}>
      <span className="flag">
        <img src={australiasvg} />
        <span>en</span>
      </span>
    </Link>
  ) : (
    <Link to={`/es/`}>
      <span className="flag">
        <img src={spainsvg} />
        <span>es</span>
      </span>
    </Link>
  )

export default function Layout({ children, lang }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const prefixUrl = url => {
    return lang && lang !== "en" ? `/${lang}${url}` : url
  }

  return (
    <>
      <div>
        <header>
          <div className="container">
            <Link className="home" to={prefixUrl(`/`)}>
              {" "}
              Home
            </Link>
            <Link className="blog" to={prefixUrl(`/blog/`)}>
              Blog
            </Link>
            <Link className="portfolio" to={prefixUrl(`/portfolio/`)}>
              Portfolio
            </Link>
            <div className="conect">Conect</div>
            <Link className="twitter" to={prefixUrl(``)}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link className="github" to={prefixUrl(`//`)}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <LangSelect lang={lang} />
          </div>
        </header>

        {children}
      </div>
    </>
  )
}
