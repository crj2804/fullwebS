import React from 'react';
import contents from "../MyData.json";

import "../styling/listdata.scss";

function ListItems () {
    return (
        <div>
        <ul className="ulist" style={{marginLeft: '-20px'}}>
            {contents.map((data, i) => {
                return<li className="listStyle" key={i} item={data}>
                    {data.content}
                </li>
            })}
        </ul>
        </div>
    )
}

export default ListItems;