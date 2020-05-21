import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const Post = ({ node }) => (
  <div>
    <Link
      to={node.fields.slug}
      css={css`
        text-decoration: none;
        color: inherit;
      `}
    >
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        {node.frontmatter.title}{" "}
        <span
          css={css`
            color: #555;
          `}
        >
          — {node.frontmatter.date}
        </span>
      </h3>
      <p>{node.excerpt}</p>
    </Link>
  </div>
)

export default Post
