import React from 'react'
import { Link } from 'gatsby'
const PageList = ({items}) => (
  items.map(({ node, index }) => (
    <span key={index}><Link to={node.fields.slug}>{node.frontmatter.title}</Link> . </span> 
  ))
)

export default PageList