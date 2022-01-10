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

    //5:30AM - 9:30PM
    var check = date.toLocaleTimeString('en-GB');
    const ActiveStyle = {
        backgroundColor: "green",
        width: "70px",
        borderRadius:"10px"
    };
    const NotActiveStyle = {
        backgroundColor: "red",
        width: "100px",
        borderRadius:"10px"
    };

    var[status,setStatus] = useState();
    var[statusStyle,setstatusStyle] = useState(ActiveStyle);
    useEffect(()=>{
        if(check>'05:30:00' && check<'23:30:00'){
            setStatus('Active');
            
        }
        else{
            setStatus("Not Active");
            setstatusStyle(NotActiveStyle);
            
        }
    });

    return (
        <div style={{
            display:"flex",
            flexDirection:"row"
        }}>
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
