import React from 'react';
import hlists from "../MyData.json";
import "../styling/listdata.scss";

function HList () {
    return (
        <div>
        <ul className="ulist" style={{marginLeft: '-20px'}}>
            {hlists.map((x, i) => {
                return<li className="listStyle" key={i} item={x}>
                    {x.Data}
                </li>
            })}
        </ul>
        </div>
    )
}

export default HList