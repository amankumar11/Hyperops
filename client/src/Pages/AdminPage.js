import React from 'react'
import Info from '../Components/AdminSection/Info';
import UserTable from '../Components/AdminSection/UserTable';
import Navbar from '../Components/Navbar';

const AdminPage = () => {
    return (
        <div>
            <Navbar/>
            <Info/>
            <UserTable/>
        </div>
    )
}

export default AdminPage
