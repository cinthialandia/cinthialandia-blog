import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
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
            to={`/`}
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
              to={`/blog/`}
              css={css`
                margin-right: 10px;
              `}
            >
              Blog
            </Link>
            <Link to={`/portfolio/`}>Portfolio</Link>
          </div>
        </header>

        {children}
      </div>
    </>
  )
}
