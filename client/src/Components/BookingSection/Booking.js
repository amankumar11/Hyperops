import React from 'react'
import '../../assets/css/booking.css';
import DetailsBox from './DetailsBox';

const Booking = (props) => {
    return (
        <div className="booking-section" id="booking">
            <div className="booking-box">
                <DetailsBox name = {props.name} email ={props.email} />
            </div>
        </div>
    )
}

export default Booking
