import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const RootLayout = ({ children }) => {
   return (
      <>
         <Navbar />
            <Outlet/>
            {children}
         <Footer />
      </>
   )
}

export default RootLayout
