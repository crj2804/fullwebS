import React from 'react';
import content from "../Days.json";
import Table from 'react-bootstrap/Table';

import "../styling/table.scss";

function Services () {
    return (
        <div>
            <Table responsive borderless style={{backgroundColor: 'transparent', color:'white'}} size="xl">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Hours</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table> 
        </div>
    )
}

export default Services
