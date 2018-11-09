import React from 'react'
import { Link } from "gatsby"

export default ({item}) => (
    <Link
        to={item.fields.slug}
    >
        <article key={item.id} className="rm-item roman">
            <a href="//localhost:1313/roman/1871-la-fortune-des-rougon/">
                    <h2 className="item-title">{item.frontmatter.title} <small>{item.frontmatter.year}</small></h2>
            </a>
        </article>
    </Link>
)