import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointments from './pages/Appointments';
import Layout from './components/Layout'
import About from './pages/About'
import Error from './pages/Error'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>

        <Route path='/doctors'>
          <Route index element={<Doctors />}/>
          <Route path=':speciality' element={<Doctors />}/>
        </Route>

        <Route path='/login' element={<Login />}/>

        <Route path='contact' element={<Contact />}/>

        <Route path='/profile' element={<MyProfile />}/>

        <Route path='/my-appointments' element={<MyAppointments />}/>

        <Route path='/about' element={<About />}/>

        <Route path='/appointments'>
          <Route path=':docId' element={<Appointments />}/>
        </Route>
      </Route>
      
      <Route path="*" element={<Error />}/>
    </Routes>
  )

}

export default App;
