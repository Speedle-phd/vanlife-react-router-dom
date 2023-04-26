import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const RootLayout = ({ children }) => {
   return (
      <>
         <Navbar />
         {children}
         <Footer/>
      </>
   )
}

export default RootLayout

