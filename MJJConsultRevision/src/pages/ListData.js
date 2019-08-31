import React from 'react';
import contents from "../MyData.json";

function ListItems () {
    return (
        <ul>
            {contents.map((data, i) => {
                return<li key={i} item={data}>
                    {data.content}
                </li>
            })}
        </ul>
    )
}

export default ListItems;