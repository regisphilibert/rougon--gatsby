import React from 'react'
import Layout from '../components/layout'
import ItemHead from '../components/ItemHead'

export default ({data}) => {
    return (
    <Layout>
       
        <div className="single-head">
            <ItemHead item={data.Item.frontmatter} />
        </div>
        <div className="main rm-container">
            <div className="rm-content" dangerouslySetInnerHTML={{ __html: data.Item.html }} />
        </div>
  </Layout>
)}

export const query = graphql`
query($slug: String!) {
    Item: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
          slug
      }
      frontmatter {
        title
        year
        header_image{
            publicURL
        }
      }
    }
}
`