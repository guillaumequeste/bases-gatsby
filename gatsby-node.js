const path = require("path")

exports.createPages = ({ actions, graphql }) => {

    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blog_template.js`)

    return graphql(`
    {
      allMarkdownRemark(
        limit: 100,
        sort: { order: ASC, fields: [frontmatter___title] }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.slug,
                component: blogPostTemplate,
            })
        })
    })
}