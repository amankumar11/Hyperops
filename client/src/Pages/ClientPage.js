import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Landing from '../Components/Landing';
import Booking from '../Components/BookingSection/Booking';
import Schedule from '../Components/ScheduleSection/Schedule';

const clientPage = () => {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <Booking/>
            <Schedule/>
        </div>
    )
}

export default clientPage
