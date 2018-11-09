import React from 'react'
import { graphql } from 'gatsby'

import Novel from '../components/novel'
import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout>
  	<div className="main rm-container">
		<div className="rm-loop">
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<Novel item={node} />
			))}
  	</div>
		</div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(
	  filter: { frontmatter: { type: { eq: "roman"}}}, 
	  sort: { fields: [frontmatter___year], order: ASC }) 
	  {
	      totalCount
	      edges {
	        node {
	          id
						excerpt
						fields{
							slug
						}
	          frontmatter {
	          	type
	          	year
	            title
	            date(formatString: "DD MMMM, YYYY")
	          }
        }
      }
    }
  }
`