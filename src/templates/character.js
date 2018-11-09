import React from 'react'
import Name from '../components/name'
import Layout from '../components/layout'
import PageList from '../components/PageList'
import { graphql } from 'gatsby'

export default ({data}) => (
  <Layout>
    <div className="main rm-container">
      <div className="single-head">
        <div className="item-title-wrapper">
          <h1 className="item-title">
            <Name item={data.Item.frontmatter} />
          </h1>
        </div>
        <div className="item-desc">
        <PageList items={data.Novels.edges}/>
        </div>
      </div>
      <div className="rm-content rm-html">
        <div className="rm-content" dangerouslySetInnerHTML={{ __html: data.Item.html }} />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query ($slug: String!, $novels: [String!]) {
    Item: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
          slug
      }
      frontmatter {
        title
        secondary_name
        name_suffix
        main_name
        novel
      }
    }
    Novels: allMarkdownRemark(filter:{
      frontmatter: {
        novel_id:{
          in: $novels
        }
        type:{
          eq: "roman"
        }
      }
    }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields{
            slug
          }
        }
      }
    }
  }
`
