import React from 'react';
import contents from "../Hours.json"

function Services () {
    return (
        <ul>
            {contents.map((content, i) => {
                return<li key={i} item={content}>
                    {content[0].one[0]}
                </li>
            })}
        </ul>
    )
}

export default Services;