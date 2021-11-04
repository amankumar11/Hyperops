import React from 'react'
import { useState, useEffect } from 'react';
import '../../assets/css/booking.css';

const DateTime = () => {
    var [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000)
        // console.log(date.toLocaleDateString());
        return function cleanup(){
            clearInterval(timer);
        }
    });

    //8AM - 2AM
    var check = date.toLocaleTimeString('en-GB');
    var statusStyle;
    var[status,setStatus] = useState();
    useEffect(()=>{
        if(check>'05:30:00' && check<'23:30:00'){
            setStatus('Active');
            statusStyle = {
                color: "green",
                width: "200px"
            }
        }
        else{
            setStatus("Not Active");
            statusStyle = {
                color: 'red',
                width: "200px"
            }
        }
    })
    

    return (
        <div>
            <p className="time">
                Time: {date.toLocaleTimeString()}
            </p>
            <p style={statusStyle} className="status">
                {status}
            </p>
        </div>
    )
}

export default DateTime
