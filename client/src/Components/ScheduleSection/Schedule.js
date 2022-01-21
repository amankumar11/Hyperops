import React from 'react'
import '../../assets/css/schedule.css';
import ScheduleTable from './ScheduleTable';
import Pod from '../../assets/img/Pod1.png';
import { useState } from 'react';
import Mumbtn from './Mumbtn';
import pdf from './Abstract_HO-217531.pdf';
import { Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Schedule = () => {
    var MumbaiPune = <ScheduleTable/>
    // const [cityButton, setcityButton] = useState({
    //     train1: "M1",
    //     train2: "M2",
    //     train3: "M3",
    //     train4: "M4",
    //     train5: "M5",
    //     train6: "M6"
    // });
    const name = "Aman";
    const [podinfo, setPodinfo ] = useState({
        PodNo: "M1",
        ArTime: "x", 
        DeTime: "y",
        username: "abc"
        
    });

    const m1 = () => {
        setPodinfo({
            PodNo: "M1",
            ArTime: "x", 
            DeTime: "y",
            username: "abc"
        })
    }

    const onResumeClick=()=>{
        window.open(pdf);
    }

    // const pbtn = () => {
    //     setcityButton({
    //         train1: "P1",
    //         train2: "P2",
    //         train3: "P3",
    //         train4: "P4",
    //         train5: "P5",
    //         train6: "P6"
    //     })
    // }

    // const mbtn = () => {
    //     setcityButton({
    //         train1: "M1",
    //         train2: "M2",
    //         train3: "M3",
    //         train4: "M4",
    //         train5: "M5",
    //         train6: "M6"
    //     })
    // }

    return (
        <div className="schedule-section" id="schedule">
            <h1>Schedule</h1>
            <div className="schedule-details">
                <div className='train-details'>
                    <div className="city-buttons">
                        {/* <button onClick={<Mumbtn/>}>Mumbai - Pune</button>
                        <button onClick={pbtn}>Pune - Mumbai</button>
                        <a onClick={onResumeClick}>Resume</a> */}
                        <h2>PODS</h2>
                    </div>
                    <div className="train-buttons-container" id="m">
                        <Col className='train-buttons'>
                            <button>
                                <a href='#m1'>
                                    M1
                                </a>
                            </button>
                            <button>M2</button>
                            <button>M3</button>
                            <button>M4</button>
                            <button>M5</button>
                            <button>M6</button>
                        </Col>
                        <Col className='train-buttons'>
                            <button>P1</button>
                            <button>P2</button>
                            <button>P3</button>
                            <button>P4</button>
                            <button>P5</button>
                            <button>P6</button>
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
