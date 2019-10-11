import React from 'react';
import Table from 'react-bootstrap/Table';

import "../styling/table.scss";

function Services () {
    return (
        <div>
            <Table id="animatetable" responsive borderless style={{backgroundColor: 'transparent', color:'white'}} size="xl">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Hours</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>9:00AM-5:00PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>9:00AM-5:00PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>9:00AM-5:00PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>9:00AM-5:00PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>9:00AM-5:00PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Closed</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </Table> 
        </div>
    )
}

export default Services
