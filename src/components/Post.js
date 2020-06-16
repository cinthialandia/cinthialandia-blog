import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import "./post.css"

const Post = ({ node }) => (
  <div>
    <Link
      to={node.fields.slug}
      css={css`
        text-decoration: none;
        color: inherit;
      `}
    >
      {" "}
      <div className="image-post-principal">
        {node.frontmatter.featuredImage && (
          <img
            src={node.frontmatter.featuredImage.childImageSharp.fluid.src}
          ></img>
        )}
      </div>
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
