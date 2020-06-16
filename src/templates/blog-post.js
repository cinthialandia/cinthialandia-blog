import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./blog-post.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout lang={post.fields.langKey}>
      <div>
        <h1 className="title-post">{post.frontmatter.title}</h1>
        <div className="image-post">
          {post.frontmatter.featuredImage && (
            <img
              src={post.frontmatter.featuredImage.childImageSharp.fluid.src}
            ></img>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              src
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
