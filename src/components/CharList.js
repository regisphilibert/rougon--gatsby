import React from 'react'
import { Link } from 'gatsby'
const CharList = ({items, layout, main}) => (
  items.map(function({node}){
    if((main && node.frontmatter.main) || !main){
        return layout === "horizontal" ? horizontalLayout(node) : verticalLayout(node)
    }
    return
  })
)

const verticalLayout = node => (
    <li className={node.frontmatter.main ? "bold" : ""}>
        <Link to={node.fields.slug}>{node.frontmatter.secondary_name && <span class="secondary-name">{node.frontmatter.secondary_name}</span> } <span class="main-name">{node.frontmatter.main_name} </span></Link>
    </li>
)
const horizontalLayout = node => (
    <span><Link to={node.fields.slug}>{name(node)}</Link> . </span>
)
const name = node => {
    let output = ""
    if(node.frontmatter.secondary_name){
        output = output.concat(node.frontmatter.secondary_name + " ")
    }
    if(node.frontmatter.main_name){
        output = output.concat(node.frontmatter.main_name)
    }
    if(node.frontmatter.name_suffix){
        output = output.concat(" (" + node.frontmatter.name_suffix + ")")
    }
    return output
}
export default CharList