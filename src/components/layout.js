import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

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
    return lang ? `/${lang}${url}` : url
  }

  return (
    <>
      <div
        css={css`
          margin: 0 auto;
          max-width: 900px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <header
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Link
            to={prefixUrl(`/`)}
            css={css`
              text-decoration: none;
              background-image: none;
            `}
          >
            <h3
              css={css`
                margin: 0;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <div>
            <Link
              to={prefixUrl(`/blog/`)}
              css={css`
                margin-right: 10px;
              `}
            >
              Blog
            </Link>
            <Link
              to={prefixUrl(`/portfolio/`)}
              css={css`
                margin-right: 20px;
              `}
            >
              Portfolio
            </Link>
            <LangSelect lang={lang} />
          </div>
        </header>

        {children}
      </div>
    </>
  )
}
