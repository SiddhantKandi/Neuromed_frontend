import Navbar from './NavBar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
