require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cinthialandia`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-code-buttons`,
            options: {
              buttonText: "Copy",
              svgIcon: "",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: ">",
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        markdownRemark: {
          postPage: "src/templates/blog-post.js",
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug,
                      langKey
                    }
                  }
                }
              }
            }
          `,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GH_TOKEN}`,
        },
        queries: [
          `{
            user(login: "cinthialandia") {
              repositories(first: 100) {
                edges {
                  node {
                    name
                    url
                    homepageUrl
                    description
                    openGraphImageUrl
                    createdAt
                    repositoryTopics(first: 5) {
                      edges {
                        node {
                          topic {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }`,
        ],
      },
    },
  ],
}
