import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';


function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<HomePage />} />
       <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route index element={<Dashboard />} />
       </Route>
       <Route path='/register' element={<Register />} />
       <Route path='/login' element={<Login />} />
       <Route path='/forgot-password' element={<ForgotPassword/>} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/policy' element={<Policy />} />
       <Route path='*' element={<Pagenotfound />} />

     </Routes>
    </>
  )
}

export default App
