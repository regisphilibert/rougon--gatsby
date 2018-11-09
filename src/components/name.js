import React from 'react'

export default ({ item }) => (
    <div>
        {item.secondary_name &&
            <span className="secondary-name">{item.secondary_name}</span>
        }
        <span className="main-name">{item.main_name}</span>
        {item.name_suffix &&
            <span className="name-suffix">{item.name_suffix}</span>
        }
    </div>
)