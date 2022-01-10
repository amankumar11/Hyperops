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
        </div>
    )
}

export default DetailsBox
