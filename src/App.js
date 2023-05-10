import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import RequireAuth from './Pages/RequireAuth';




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
<Route path='login' element={<Login></Login>}></Route>
<Route path='signup' element={<Signup></Signup>}></Route>


</Routes>

    </div>
  );
}

export default App;
