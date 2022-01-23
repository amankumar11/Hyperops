import React from 'react'
import '../../assets/css/booking.css';
import AdminDetails from './AdminDetails';
import UserTable from './UserTable';

const Info = () => {
    return (
        <div className="booking-section-admin" id="booking">
            <div className="bookingadmin-box">
                <AdminDetails/>
            </div>
        </div>
    )
}

export default Info
