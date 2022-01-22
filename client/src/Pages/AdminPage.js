import React from 'react'
import Info from '../Components/AdminSection/Info';
import UserTable from '../Components/AdminSection/UserTable';
import Footer from '../Components/Footer';
import HyperopsNavbar from '../Components/Navbar';

const AdminPage = () => {
    return (
        <div>
            <HyperopsNavbar/>
            <Info/>
            <UserTable/>
            <Footer/>
        </div>
    )
}

export default AdminPage
