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
import NotFound from './pages/NotFound'
import HostLayout from './layout/HostLayout'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import UserVans from './pages/UserVans'
import Reviews from './pages/Reviews'
import SingleUserVanLayout from './layout/SingleUserVanLayout'
import General from './pages/General'
import Photos from './pages/Photos'
import Pricing from './pages/Pricing'

// function App() {
//    return (
//       <BrowserRouter>
//          <RootLayout>
//             <Routes path='/'>
//                <Route index element={<Home />}></Route>
//                <Route path='/about' element={<About />}></Route>
//                <Route path="/vans" element={<Vans/>}></Route>
//                <Route path="/vans/:id" element={<SingleVan/>}/>
//                <Route path="host" element={<HostLayout/>}>
//                   <Route index element={<Dashboard/>} strict={true} exact/>
//                   <Route path="/host/income" element={<Income/>}/>
//                   <Route path="/host/vans" element={<UserVans/>}/>
//                   <Route path="vans/:id" element={<SingleUserVanLayout/>}>
//                      <Route index element={<General />} exact/>
//                      <Route path="pricing" element={<Pricing />}/>
//                      <Route path="photos" element={<Photos />}/>
//                   </Route>
//                   <Route path="reviews" element={<Reviews/>}/>
//                </Route>
//                <Route path="*" element={<NotFound />} />
//             </Routes>
//          </RootLayout>
//       </BrowserRouter>
//    )
// }

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout/>,
      children: [
         {
            index: true,
            element: <Home/>
         },
         {
            path: "about",
            element: <About/>
         },
         {
            path: "vans",
            element: <Vans/>
         },
         {
            path: "vans/:id",
            element: <SingleVan/>
         },
         {
            path: "host",
            element: <HostLayout/>,
            children: [
               {
                  index: true,
                  element: <Dashboard/>,
                  strict: true,
                  exact: true,
               },
               {
                  path: "income",
                  element: <Income/>
               },
               {
                  path: "reviews",
                  element: <Reviews/>
               },
               {
                  path: "vans",
                  element: <UserVans/>
               },
               {
                  path: "vans/:id",
                  element: <SingleUserVanLayout/>,
                  children: [
                     {
                        index: true,
                        exact: true,
                        element: <General/>
                     },
                     {
                        path: "pricing",
                        element: <Pricing/>
                     },
                     {
                        path: "photos",
                        element: <Photos/>
                     },
                  ]
               },
            ]
         },
         {
            path: "*",
            element: <NotFound/>
         }
      ]
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   // <App />
   <RouterProvider router={router}/>
)
