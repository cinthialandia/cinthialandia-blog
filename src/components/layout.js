import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./layout.scss"
import australiasvg from "./img/australia.svg"
import spainsvg from "./img/spain.svg"
import cinthialandia from "./img/logito-edit.png"

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
        <Link className="nav-home" to={prefixUrl(`/`)}>
          <img src={cinthialandia} />
        </Link>
        <nav>
          <Link className="nav-blog" to={prefixUrl(`/blog/`)}>
            Blog
          </Link>
          <Link className="nav-portfolio" to={prefixUrl(`/portfolio/`)}>
            Portfolio
          </Link>
        </nav>
        <div className="lang-select">
          <LangSelect lang={lang} />
        </div>
      </header>
      {children}
    </>
  )
}
