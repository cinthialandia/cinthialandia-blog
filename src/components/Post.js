import React from "react"
import { Link } from "gatsby"
import "./post.scss"

const Post = ({ node }) => (
  <>
    <div className="container-post">
      <div className="image-post-principal">
        {node.frontmatter.featuredImage && (
          <img
            src={node.frontmatter.featuredImage.childImageSharp.fluid.src}
          ></img>
        )}
      </div>
      <div className="container-post-information">
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    </div>
  </>
)

export default Post
