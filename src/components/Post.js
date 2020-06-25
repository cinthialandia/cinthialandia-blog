import React from "react"
import { Link } from "gatsby"
import "./post.scss"

const Post = ({ node }) => (
  <>
    <div className="container-post">
      <div className="container-post-information">
        <Link to={node.fields.slug}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.excerpt}</p>
        </Link>
        <h4>{node.frontmatter.date}</h4>
      </div>
    </div>
  </>
)

export default Post
