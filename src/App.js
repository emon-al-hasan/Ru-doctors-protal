import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import RequireAuth from './Pages/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';



function App() {
  return (
    <div className='App '>
<Navbar></Navbar>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About />}/>
  <Route path="appointment" element={<RequireAuth>
    <Appointment />
  </RequireAuth>}/>
  <Route path="dashboard" element={<RequireAuth>
    <Dashboard />
  </RequireAuth>}>
    <Route index element={<MyAppointment></MyAppointment>}></Route>
    <Route path="review" element={<MyReview></MyReview>}></Route>
    <Route path="history" element={<MyHistory></MyHistory>}></Route>
  </Route>
<Route path='login' element={<Login></Login>}></Route>
<Route path='signup' element={<Signup></Signup>}></Route>



</Routes>
<ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
