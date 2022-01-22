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
import ScheduleTable from './Components/ScheduleSection/ScheduleTable';


function App() {



  return (
    <div id="home">
      <Router>
        <Switch>
        <Route exact path="/">
          <Login/>
          </Route>
          <Route path="/client">
            <ClientPage/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/admin">
            <AdminPage/>
          </Route>
          <Route path="/check">
            <ClientPage/>
          </Route>
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
