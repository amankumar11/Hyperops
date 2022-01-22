import React, { useEffect, useState } from 'react';
import { Navbar, Table } from 'react-bootstrap';
import '../../assets/css/usertable.css';
import swal from 'sweetalert';

const UserTable = () => {

  const [bookings, setBookings] = useState([]);
  const fetchAllBookings = () => {
        
          fetch(`http://localhost:5000/bookings/all`,{
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


  return (
  <div className='usertable-div'>
      <h1>User Details</h1>
      <div>
        <Table striped bordered className='usertable'>
                <thead className='usertable'>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Destination City</th>
                    <th>Pod Number</th>
                    <th>Mode of Transport</th>
                    <th>Change Pod Number</th>
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
                        <button class="changebtn" onClick={() => {
                          swal({
                            content: {
                              element: "input",
                              attributes: {
                                placeholder: "Change Pod Number",
                                type: "text",
                              },
                            },
                          });
                        }}>Change Pod No.</button>
                      </tr>
                  })}
                    
                   
                </tbody>
                
        </Table>
        </div>
  </div>
  )
};

export default UserTable;
