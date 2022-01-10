// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientPage from './Pages/ClientPage';
// import Landing from './Components/Landing';
// import Navbar from './Components/Navbar';
// import Booking from './Components/BookingSection/Booking';
// import Schedule from './Components/ScheduleSection/Schedule';
import AdminPage from './Pages/AdminPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


function App() {
  return (
    <div id="home">
      {/* <ClientPage/> */}
      {/* <AdminPage/> */}
      {/* <Register/> */}
      <Login/>
    </div>
  );
}

export default App;
