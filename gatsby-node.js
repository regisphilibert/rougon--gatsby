const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    let thisPath = "page"
    if(node.frontmatter.type == "novel"){
      thisPath = "roman"
    }
    if(node.frontmatter.type == "character"){
      thisPath = "personnage"
    }
    const slug = createFilePath({ node, getNode, basePath: thisPath })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter{
                type
                novel
                novel_id
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const mapping = {roman: "novel", personnage: "character", page: "page"}
      const templateName = mapping[node.frontmatter.type]
      let novels = []
      if(node.frontmatter.type == "personnage"){
        novels = node.frontmatter.novel
      }
      let novel_id = ""
      if(node.frontmatter.type == "roman"){
        novel_id = node.frontmatter.novel_id
      }
      
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/${templateName}.js`),
        
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          novels: novels,
          novel_id: novel_id
        },
      })
    })
    resolve()
    })
  })
}