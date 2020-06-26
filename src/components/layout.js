import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./layout.scss"
import australiasvg from "./img/australia.svg"
import spainsvg from "./img/spain.svg"
import cinthialandia from "./img/logito-edit.png"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const LangSelect = ({ lang }) =>
  lang === "es" ? (
    <Link to={`/`}>
      <span className="flag">
        <img src={australiasvg} />
        <span>English</span>
      </span>
    </Link>
  ) : (
    <Link to={`/es/`}>
      <span className="flag">
        <img src={spainsvg} />
        <span>Español</span>
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
      <header>
        <div className="nav-button-container">
          <Link className="nav-home" to={prefixUrl(`/`)}>
            <img src={cinthialandia} />
          </Link>
          <button className="nav-button-mobile">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav className="visible">
          <Link className="nav-blog" to={prefixUrl(`/blog/`)}>
            Blog
          </Link>
          <Link className="nav-portfolio" to={prefixUrl(`/portfolio/`)}>
            Portfolio
          </Link>
        </nav>
        <div className="lang-select visible">
          <LangSelect lang={lang} />
        </div>
      </header>
      {children}
    </>
  )
}
