import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import AuthContextProvider, { getLocalStorage } from './context/AuthContextProvider'
import {
   BrowserRouter,
   Link,
   createBrowserRouter,
   Routes,
   Route,
   RouterProvider,
   redirect,
} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Vans from './pages/Vans'
import { SingleUserVanLoader, SingleVanLoader, UserVansLoader, VansLoader, createUser, getUser } from './api/api.js'
import About from './pages/About'
const About2 = lazy(() => import('./pages/About.jsx'))
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
import Error from './components/Error'
import Login from './pages/Login'
import LoginError from './components/LoginError'
import { isLogged } from './utils/utils'


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
      path: '/',
      element: <RootLayout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: 'login',
            element: <Login />,
            action: getUser,
            errorElement: <LoginError />,
         },
         {
            path: 'signup',
            element: <Login />,
            action: createUser,
            errorElement: <LoginError />,
         },
         {
            path: 'about',
            element: <About2 />,
         },
         {
            path: 'vans',
            element: <Vans />,
            loader: VansLoader,
            errorElement: <Error />,
         },
         {
            path: 'vans/:id',
            element: <SingleVan />,
            loader: SingleVanLoader,
            errorElement: <Error />,
         },
         {
            path: 'host',
            element: <HostLayout />,
            children: [
               {
                  index: true,
                  element: <Dashboard />,
                  strict: true,
                  exact: true,
                  loader: UserVansLoader,
                  errorElement: <Error />,
               },
               {
                  path: 'income',
                  element: <Income />,
               },
               {
                  path: 'reviews',
                  element: <Reviews />,
               },
               {
                  path: 'vans',
                  element: <UserVans />,
                  loader: UserVansLoader,
                  errorElement: <Error />,
               },
               {
                  path: 'vans/:id',
                  element: <SingleUserVanLayout />,
                  loader: SingleUserVanLoader,
                  errorElement: <Error />,
                  children: [
                     {
                        index: true,
                        exact: true,
                        element: <General />,
                     },
                     {
                        path: 'pricing',
                        element: <Pricing />,
                     },
                     {
                        path: 'photos',
                        element: <Photos />,
                     },
                  ],
               },
            ],
         },
      ],
   },
   {
      path: '*',
      element: <NotFound />,
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   // <App />
   <AuthContextProvider>
      <RouterProvider router={router}/>
   </AuthContextProvider>
)
