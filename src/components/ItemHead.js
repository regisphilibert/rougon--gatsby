import React from 'react'

export default ({item}) => (
    <div className="item-title-wrapper">
        <h1 className={item.header_image ? "with-image item-title image-loaded" : "item-title image-loaded"}>
            {item.header_image ? (
                <img className="background-image" src={item.header_image.publicURL} alt="" />
            ) : ("")}
                <div className="background-image-copyrights">Le député Baudin sur la barricade - Méjanel La Fortune des Rougon 1871</div>
                {item.title} <small>{item.year}</small>
        </h1>
    </div>
)