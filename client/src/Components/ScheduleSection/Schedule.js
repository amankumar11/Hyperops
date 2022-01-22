import React from 'react'
import '../../assets/css/schedule.css';
import ScheduleTable from './ScheduleTable';
import Pod from '../../assets/img/Pod1.png';
import { useState } from 'react';
import { Col } from 'react-bootstrap';

const Schedule = () => {
    return (
        <div className="schedule-section" id="schedule">
            <h1>Schedule</h1>
            <div className="schedule-details">
                <div className='train-details'>
                    <div className="city-buttons">
                        <h2>PODS</h2>
                    </div>
                    <div className="train-buttons-container" id="m">
                        <Col className='train-buttons'>
                            <button>
                                <a href='#mp'>
                                    Mumbai to Pune
                                </a>
                            </button>
                            <button>
                                <a href='#pm'>
                                    Pune to Mumbai
                                </a>
                            </button>
                        </Col>
                    </div>
                </div>
                <div className="table-div">
                    <ScheduleTable/>
                </div>
            </div>
            {/* <img src={Pod}></img> */}
        </div>
    )
}

export default Schedule
