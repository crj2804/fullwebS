import React from 'react';
import mcontents from "../MyData.json";

import "../styling/listdata.scss";

function ListWho () {
    return (
        <div>
        <ul className="ulist" style={{marginLeft: '-20px'}}>
            {mcontents.map((data, i) => {
                return<li className="listStyle" key={i} item={data}>
                    {data.MContent}
                </li>
            })}
        </ul>
        </div>
    )
}

export default ListWho;