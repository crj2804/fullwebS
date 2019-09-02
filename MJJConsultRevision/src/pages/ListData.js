import React from 'react';
import contents from "../MyData.json";

import "../styling/listdata.scss";

function ListItems () {
    return (
        <div id="hov">
        <ul class="ulist" style={{marginLeft: '-20px'}}>
            {contents.map((data, i) => {
                return<li id="listdata" key={i} item={data}>
                    {data.content}
                </li>
            })}
        </ul>
        </div>
    )
}

export default ListItems;