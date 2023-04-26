import React from 'react'
import ReactDOM from 'react-dom/client'
import {
   BrowserRouter,
   Link,
   createBrowserRouter,
   Routes,
   Route,
   RouterProvider,
} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Vans from './pages/Vans'
import About from './pages/About'
import Home from './pages/Home'
import "./server.js"
import SingleVan from './pages/SingleVan'

function App() {
   return (
      <BrowserRouter>
         <RootLayout>
            <Routes path='/'>
               <Route index element={<Home />}></Route>
               <Route path='/about' element={<About />}></Route>
               <Route path="/vans" element={<Vans/>}></Route>
               <Route path="/vans/:id" element={<SingleVan/>}/>
            </Routes>
         </RootLayout>
      </BrowserRouter>
   )
}

// const router = createBrowserRouter([
//    {
//       path: "/",
//       element: <App/>,
//    },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
   <App />
   // <RouterProvider router={router}/>
)
