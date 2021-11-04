// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Booking from './Components/BookingSection/Booking';

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Booking/>
    </div>
  );
}

export default App;
