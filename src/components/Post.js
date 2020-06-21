import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import "./post.css"

const Post = ({ node }) => (
  <div className="container-post">
    <Link to={node.fields.slug}>
      <div className="image-post-principal">
        {node.frontmatter.featuredImage && (
          <img
            src={node.frontmatter.featuredImage.childImageSharp.fluid.src}
          ></img>
        )}
      </div>
      <h3>
        {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
      </h3>
      <p>{node.excerpt}</p>
    </Link>
  </div>
)

export default Post
