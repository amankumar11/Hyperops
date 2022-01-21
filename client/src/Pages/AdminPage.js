import React from 'react'
import Info from '../Components/AdminSection/Info';
import UserTable from '../Components/AdminSection/UserTable';
import HyperopsNavbar from '../Components/Navbar';

const AdminPage = () => {
    return (
        <div>
            <HyperopsNavbar/>
            <Info/>
            <UserTable/>
        </div>
    )
}

export default AdminPage
