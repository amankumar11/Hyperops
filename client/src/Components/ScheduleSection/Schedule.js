import React from 'react'
import '../../assets/css/schedule.css';
import ScheduleTable from './ScheduleTable';
import Pod from '../../assets/img/Pod1.png';
import { useState } from 'react';

const Schedule = () => {
    var MumbaiPune = <ScheduleTable/>
    const [cityButton, setcityButton] = useState({
        train1: "M1",
        train2: "M2",
        train3: "M3",
        train4: "M4",
        train5: "M5",
        train6: "M6"
    });

    const pbtn = () => {
        setcityButton({
            train1: "P1",
            train2: "P2",
            train3: "P3",
            train4: "P4",
            train5: "P5",
            train6: "P6"
        })
    }

    const mbtn = () => {
        setcityButton({
            train1: "M1",
            train2: "M2",
            train3: "M3",
            train4: "M4",
            train5: "M5",
            train6: "M6"
        })
    }

    return (
        <div className="schedule-section" id="schedule">
            <h1>Schedule</h1>
            <div className="schedule-details">
                <div className='train-details'>
                    <div className="city-buttons">
                        <button onClick={mbtn}>Mumbai - Pune</button>
                        <button onClick={pbtn}>Pune - Mumbai</button>
                    </div>
                    <div className="train-buttons" id="m">
                        <button>{cityButton.train1}</button>
                        <button>{cityButton.train2}</button>
                        <button>{cityButton.train3}</button>
                        <button>{cityButton.train4}</button>
                        <button>{cityButton.train5}</button>
                        <button>{cityButton.train6}</button>
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
