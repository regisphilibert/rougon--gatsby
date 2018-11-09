import React from 'react'
import Layout from '../components/layout'
import CharList from '../components/CharList'
import ItemHead from '../components/ItemHead'

export default ({data}) => {
    return (
    <Layout>
       
        <div className="single-head">
            <ItemHead item={data.Item.frontmatter} />
        </div>
        <div className="main rm-container">
            <div className="item-desc">
            {data.Item.fields.type}
                {data.Characters && 
                <CharList items={data.Characters.edges} main={true} layout="horizontal" />
                }
            </div>
            <div className="rm-content" dangerouslySetInnerHTML={{ __html: data.Item.html }} />
            <div class="rm-sidebar">
                {data.Characters && 
                <div class="rm-widget widget-chars desktop-block">
                    <ul>
                        <CharList items={data.Characters.edges} main={false} layout="vertical" />
                    </ul>
                </div>
                }
            </div>
        </div>
  </Layout>
)}

export const query = graphql`
query($slug: String!, $novel_id: String!) {
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
    Characters: allMarkdownRemark(
        filter:{
            frontmatter: {
            novel:{
                glob: $novel_id
            }
            type:{
                eq: "personnage"
            }
            }
        }
        sort: { fields: [frontmatter___main_name], order: ASC }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              main
              secondary_name
              main_name
            }
            fields{
              slug
            }
          }
        }
    }
}
`