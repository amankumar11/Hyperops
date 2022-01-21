import React from 'react'
import { Navbar, Table } from 'react-bootstrap';
import Schedule from './Schedule';
import { useState } from 'react';
import Landing from '../Landing';
import Booking from '../BookingSection/Booking';
import mpPDF from '../../assets/Docs/MumToPune.pdf';
import pmPDF from '../../assets/Docs/PuneToMum.pdf';

const ScheduleTable = (props) => {
    return (
        <div>
        <div className='table'>
            <embed src={mpPDF} id="mp"></embed>
            <embed src={pmPDF} id="pm"></embed>
            {/* <Table striped bordered hover id="mp">
                <thead>
                    <tr>
                    <th>Departure Time</th>
                    <th>Departure Station</th>
                    <th>Arrival Time</th>
                    <th>Arrival Station</th>
                    <th>Pod Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5:36 AM</td>
                        <td>1</td>
                        <td>6:01 AM</td>
                        <td>7</td>
                        <td>M1</td>
                    </tr>
                    <tr>
                        <td>5:43 AM</td>
                        <td>2</td>
                        <td>6:08 AM</td>
                        <td>8</td>
                        <td>M2</td>
                    </tr>
                    <tr>
                        <td>5:50 AM</td>
                        <td>3</td>
                        <td>6:15 AM</td>
                        <td>9</td>
                        <td>M3</td>
                    </tr>
                    <tr>
                        <td>5:57 AM</td>
                        <td>4</td>
                        <td>6:22 AM</td>
                        <td>10</td>
                        <td>M4</td>
                    </tr>
                    <tr>
                        <td>6:04 AM</td>
                        <td>5</td>
                        <td>6:29 AM</td>
                        <td>11</td>
                        <td>M5</td>
                    </tr>
                    <tr>
                        <td>6:07 AM</td>
                        <td>7</td>
                        <td>6:32 AM</td>
                        <td>1</td>
                        <td>P1</td>
                    </tr>
                    <tr>
                        <td>6:11 AM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover id="pm">
                <thead>
                    <tr>
                    <th>Departure Time</th>
                    <th>Departure Station</th>
                    <th>Arrival Time</th>
                    <th>Arrival Station</th>
                    <th>Pod Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table> */}
            
        </div>
        </div>
    )
}

export default ScheduleTable
