import React from "react"
import { Link } from "gatsby"
import "./post.scss"

const Post = ({ node }) => {
  const blogImage = node.frontmatter.featuredImage
    ? node.frontmatter.featuredImage.childImageSharp.fluid
    : null
  return (
    <>
      <div className="container-post">
        <div className="image-post-principal">
          {blogImage && <img src={blogImage.src} alt="featured"></img>}
        </div>
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
}

export default Post
