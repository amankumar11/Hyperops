import React from 'react'
import '../../assets/css/info.css';
import DateTime from '../BookingSection/DateTime';
import Schedule from '../BookingSection/Schedule';

const AdminDetails = () => {
    return (
        <div className="details-box">
            <DateTime/>
            <h1 className='info-head'>Current Status</h1>
            <div className="route-details">
                <div className="city">
                    Origin City
                    <p>Mumbai, India</p>
                </div>
                <div className="city">
                    Destination City
                    <p>Pune, India</p>
                </div>
                <div className="city">
                    Pod Number
                    <p>pod num</p>
                </div>
                <div className="distance">
                    Reaching Pune in
                    <p>n minutes</p>
                </div>
            </div>
            <div className="route-details">
                <div className="city">
                    Origin City
                    <p>Pune, India</p>
                </div>
                <div className="city">
                    Destination City
                    <p>Mumbai, India</p>
                </div>
                <div className="city">
                    Pod Number
                    <p>pod num</p>
                </div>
                <div className="distance">
                    Reaching Pune in
                    <p>n minutes</p>
                </div>
            </div>
            {/* <Schedule/> */}
        </div>
    )
}

export default AdminDetails
