import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import layout from "./layout.css"

const LangSelect = ({ lang }) =>
  lang === "es" ? <Link to={`/`}>en</Link> : <Link to={`/es/`}>es</Link>

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
            <div className="cinthialandia">Cinthialandia</div>
            <div className="conect">Conect</div>
            <Link className="twitter" to={prefixUrl(``)}>
              Twitter
            </Link>
            <Link className="github" to={prefixUrl(`//`)}>
              Github
            </Link>
            <LangSelect lang={lang} />
          </div>
        </header>

        {children}
      </div>
    </>
  )
}
