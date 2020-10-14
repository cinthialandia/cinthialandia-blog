require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cinthialandia`,
    description: `cinthia valero personal page, portfolio and blog`,
    author: `Cinthia Valero`,
    keywords: [
      `cinthia`,
      `blog`,
      `portfolio`,
      `react`,
      `typescript`,
      `javascript`,
      `css`,
      `portafolio`,
    ],
    siteUrl: `https://cinthialandia.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162255568-1",
      },
    },
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
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-stackblitz`,
            options: {
              height: 600,
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
                    owner {
                      login
                    }
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
              repositoriesContributedTo(first: 100, includeUserRepositories: false) {
                edges {
                  node {
                    createdAt
                    description
                    homepageUrl
                    name
                    openGraphImageUrl
                    url
                    owner {
                      login
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
