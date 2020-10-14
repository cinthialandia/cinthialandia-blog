import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog-post.css"

export default function BlogPost({ data, location }) {
  const post = data.markdownRemark
  const seoImage = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null
  return (
    <Layout lang={post.fields.langKey}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={seoImage}
        pathname={location.pathname}
      />
      <div className="background-color-posts">
        <div className="blog-page-posts">
          <h1 className="title-post">{post.frontmatter.title}</h1>
          <div className="image-post">
            {post.frontmatter.featuredImage && (
              <img
                src={post.frontmatter.featuredImage.childImageSharp.fluid.src}
              ></img>
            )}
          </div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              src
            }
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      fields {
        langKey
      }
    }
  }
`
