import React from 'react'
import '../../assets/css/booking.css';
import DateTime from './DateTime';
import Schedule from './Schedule';

const DetailsBox = () => {
    return (
        <div className="details-box">
            <DateTime/>
            <div className="route-details">
                <div className="city">
                    Origin City :
                    <p>Mumbai, India</p>
                </div>
                <div className="city">
                    Destination City :
                    <p>Pune, India</p>
                </div>
                <div className="distance">
                    Distance :
                    <p>74 miles/ 119 km</p>
                </div>
            </div>
            <Schedule/>
            <h1 className='bookh1'>Book Now !</h1>
            <div className='booknowspace'>
                <div className='userform'>
                    <div>
                        <select name="Destination" id="destination">
                            <option value="none">Destination City</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                        </select> 
                        <span className='tooltiptext'>Enter your destination city</span>
                    </div>     
                    <div>  
                        <select name="PodNumber" id="pn">
                            <option value="none">Select Pod</option>
                            <option value="M1">M1</option>
                            <option value="M2">M2</option>
                            <option value="M3">M3</option>
                            <option value="M4">M4</option>
                            <option value="M5">M5</option>
                            <option value="M6">M6</option>
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>
                            <option value="P4">P4</option>
                            <option value="P5">P5</option>
                            <option value="P6">P6</option>
                        </select>
                        <span className='tooltiptext'>Refer to the Schedule to see the pod no.</span>
                    </div>
                    <div>
                        <select name="PodNumber" id="pn">
                            <option value="none">Mode of transport that you will use</option>
                            <option value="Taxi">Taxi</option>
                            <option value="Parking">Parking</option>
                            <option value="Metro">Metro</option>
                            <option value="exit">Exit</option>
                        </select>
                        <span className='tooltiptext'>Mode of transport that you will use after arrival</span>
                    </div>
                </div>
                <button className='bookbtn'>Book</button>
                {/* <div className='note'>
                    <p>*Select the Pod Number according to your timing by refering to the schedule section</p>
                    <p>*Choose the mode of transport that you will use after arrival</p>
                </div> */}
            </div>
        </div>
    )
}

export default DetailsBox
