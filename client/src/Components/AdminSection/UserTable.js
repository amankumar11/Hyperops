import React, { useEffect, useState } from 'react';
import { Navbar, Table } from 'react-bootstrap';
import '../../assets/css/usertable.css';
import swal from 'sweetalert';
import URL from "../../URL";

const UserTable = () => {

  const [bookings, setBookings] = useState([]);
  const fetchAllBookings = () => {
        
          fetch(`${URL}/bookings/all`,{
            method:"GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Cache': 'no-cache'
            },
            credentials: 'include'
          })
          .then(async response => {
              if(response.ok){
                  
                  response.json().then(data => {
                    console.log(data);
                    setBookings(data);
                  });
              }
              else{
                  throw response.json();
              }
            })
            .catch(async (error) => {
              const errorMessage = await error;
                console.log(errorMessage);
            })
  }

  useEffect(() => {
    fetchAllBookings();
  },[])

  const updateBookingDetails = (bookingId,podNo) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({
          id:bookingId,
          pod:podNo
      }),  
      credentials: "include"
      };
      fetch(`${URL}/bookings/update`, requestOptions )
              .then(async response => {
                  if(response.ok){
                         
                          swal({
                            title:"Booking Update Successful !!"
                          }).then(() => {
                            window.location.reload()
                          })
                      
                   }
                  else{
                      alert("Invalid Request, Please Try Again !")
                      throw response.json();
                  }
                })
                .catch(async (error) => {
                  const errorMessage = await error;
                  console.log(errorMessage);
                })

  }

  const deleteBooking = (bookingId) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({
          id:bookingId,
      }),  
      credentials: "include"
      };
      fetch(`${URL}/bookings/delete`, requestOptions )
              .then(async response => {
                  if(response.ok){
                         
                          swal({
                            title:"Booking Deletion Successful !!"
                          }).then(() => {
                            window.location.reload()
                          })
                      
                   }
                  else{
                      alert("Invalid Request, Please Try Again !")
                      throw response.json();
                  }
                })
                .catch(async (error) => {
                  const errorMessage = await error;
                  console.log(errorMessage);
                })

  }


  return (
  <div className='usertable-div'>
      <h1>User Details</h1>
      <div className='table-responsive'>
        <Table striped bordered className='usertable'>
                <thead className='usertable'>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Destination City</th>
                    <th>Pod Number</th>
                    <th>Mode of Transport</th>
                    <th>Change Pod Number</th>
                    <th>Delete Booking</th>
                    </tr>
                </thead>
                <tbody>
                  {bookings.map((booking)=>{
                   return <tr className='details'>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.city}</td>
                        <td>{booking.pod}</td>
                        <td>{booking.transportMode}</td>
                        <td>
                            <button id = {booking._id} class="changebtn" onClick={(() => {
                              swal({
                                title:"Enter Updated Pod Number",
                                content: {
                                  element: "input",
                                  attributes: {
                                    placeholder: "Change Pod Number",
                                    type: "text",
                                  },
                                },
                              })
                              .then(podNo => {
                                if(!podNo)
                                {
                                  swal("Enter The Pod Number Correctly ! ")
                                }
                                else
                                {
                                  updateBookingDetails(booking._id, podNo);
                                }
                              })
                            })}>Change Pod No.</button>
                        </td>
                        <td>
                        <button id = {booking._id} class="changebtn" onClick={(() => {

                          swal({
                            title:"Are You Sure You Want To Delete This Booking ?"
                          }).then(() => {
                            deleteBooking(booking._id);
                          })

                          })}> Delete Booking</button>
                        </td>
                      </tr>
                  })}
                    
                   
                </tbody>
                
        </Table>
        </div>
  </div>
  )
};

export default UserTable;
