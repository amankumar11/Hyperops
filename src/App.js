// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Booking from './Components/BookingSection/Booking';
import Schedule from './Components/ScheduleSection/Schedule';

function App() {
  return (
    <div id="home">
      <Navbar/>
      <Landing/>
      <Booking/>
      <Schedule/>
    </div>
  );
}

export default App;
