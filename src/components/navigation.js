import React from 'react'
import { Link, graphql, StaticQuery } from "gatsby"
export default () => (
<StaticQuery query={query}
    render={data => (
        
        <div class="main-nav-wrapper">
            <div class="scroll-wrapper">
                <svg class="svg-inline--fa fa-bars fa-w-14 rm-menu-icon" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>

                <div class="main-mav">
                    <ul>
                        <li>
                            <Link to="./pages/a-propos">A Propos</Link>
                        </li>
                        <li>
                            <Link to="./pages/emile-zola">Émile Zola</Link>
                        </li>
                        <li class="active">
                            <a href="./romans/">Les Romans</a>
                        </li>
                        {data.Novels.edges.map( ({node}) => (
                            <li className="child">
                                <Link to={node.fields.slug} >{node.frontmatter.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )} />
)

const query = graphql`  
    query {
        Novels: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "roman"}}}, 
        sort: { fields: [frontmatter___year], order: ASC }) 
        {
            totalCount
            edges {
                node {
                id
                fields{
                    slug
                }
                frontmatter {
                    year
                    title
                }
            }
        }
        }
    }
    `