import React from 'react';
import { Navbar, Table } from 'react-bootstrap';
import '../../assets/css/usertable.css';

const UserTable = () => {
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Aman Kumar</td>
                    <td>aman.kumar11112001@gmail.com</td>
                    <td>Pune</td>
                    <td>P3</td>
                    <td>Taxi</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
        </Table>
        </div>
  </div>
  )
};

export default UserTable;
