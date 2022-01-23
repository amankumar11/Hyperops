import React, { useState } from 'react'
import '../../assets/css/booking.css';
import DateTime from './DateTime';
import Schedule from './Schedule';
import URL from '../../URL';


const DetailsBox = (props) => {

    const [bookingDetails, setBookingDetails] = useState({
        city:"",
        pod:"",
        transportMode : ""
    });
    const cityHandler = (e) => {
        setBookingDetails((prev) => {
            return{
                ...prev,
                city:e.target.value
            }
        })
     
    }
    const podHandler = (e) => {
        setBookingDetails((prev) => {
            return{
                ...prev,
                pod:e.target.value
            }
        })
     
    }
    const transportModeHandler = (e) => {
        setBookingDetails((prev) => {
            return{
                ...prev,
                transportMode:e.target.value
            }
        })
     
    }
 
    const bookingHandler = (e) => {
        e.preventDefault();
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                'name':props.name,
                'email':props.email,
                'city':bookingDetails.city,
                'pod':bookingDetails.pod,
                'transportMode': bookingDetails.transportMode
            }),  
            credentials: "include"
            };
            fetch(`${URL}/bookings/new`, requestOptions )
                    .then(async response => {
                        if(response.ok){
                            response.json().then(data => {
                                console.log(data);    
                                alert("Booking Successful, Ticket Details Sent On The Registered Email !")            
                            });
                            
                         }
                        else{
                            alert("Booking Unsuccessful Try Again, Please Try Again !")
                            throw response.json();
                        }
                      })
                      .catch(async (error) => {
                        const errorMessage = await error;
                        console.log(errorMessage);
                      })
    }

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
            <p style={{color:"grey"}}>Ticket Details Will be Sent On The Registered Email Upon Confirmation !</p>
            <div className='booknowspace'>
                <div className='userform'>
                    <div>
                        <span className='tooltiptext'>Enter Destination</span>
                        <select name="Destination" onChange={(e) => cityHandler(e)} id="destination">
                            <option value="none">Destination City</option>
                            <option value="mumbai" >Mumbai</option>
                            <option value="pune" >Pune</option>
                        </select>        
                    </div>     
                    <div>
                         <span className='tooltiptext'>Select Your Pod</span>
                        <select onChange={(e) => podHandler(e)}name="PodNumber" id="pn">
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
                    </div>
                    <div>
                        <span className='tooltiptext'>Enter Transportation Mode</span>
                        <select onChange={(e) => transportModeHandler(e)} name="Mode Of Transport" id="mot">
                            <option value="none">Mode of transport that you will use</option>
                            <option value="Taxi">Taxi</option>
                            <option value="Parking">Parking</option>
                            <option value="Metro">Metro</option>
                            <option value="exit">Exit</option>
                        </select>
                    </div>
                </div>
                    <button onClick = {(e) => bookingHandler(e)} className='bookbtn'>Book</button>
                    <div className='note'>
                        <p>*Select the Pod Number according to your timing by refering to the schedule section</p>
                        <p>*Choose the mode of transport that you will use after arrival</p>
                    </div>
            </div>
        </div>
    )
}

export default DetailsBox
