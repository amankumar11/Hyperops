// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ClientPage from './Pages/ClientPage';
// import Landing from './Components/Landing';
// import Navbar from './Components/Navbar';
// import Booking from './Components/BookingSection/Booking';
// import Schedule from './Components/ScheduleSection/Schedule';
import AdminPage from './Pages/AdminPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { useState } from 'react';


function App() {

  const [user, setloginuser] = useState({})

  return (
    <div id="home">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id
              ?
              <ClientPage/>
              :
              <Login setloginuser={setloginuser}/>

            }
          </Route>
          <Route path="/login">
            <Login setloginuser={setloginuser}/>
          </Route>
          <Route path="/register"><Register/></Route>
        </Switch>
      </Router>
      {/* <ClientPage/> */}
      {/* <AdminPage/> */}
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
