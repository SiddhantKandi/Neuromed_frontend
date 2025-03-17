import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import DoctorMenu from '../components/DoctorMenu'
import AppointmentMenu from '../components/AppointmentMenu'

function Home() {
  return (
      <div>
        <Header />
        <SpecialityMenu />
        <DoctorMenu />
        <AppointmentMenu />
      </div>
  )
}

export default Home
