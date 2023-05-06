import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const HostNav = () => {
   return (
      <>
         <HostNavWrapper>
            <nav>
               <NavLink
                  className={({ isActive }) =>
                     isActive ? 'active-nav-link' : null
                  }
                  to='/host'
                  end
               >
                  dashboard
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     isActive ? 'active-nav-link' : null
                  }
                  to='income'
               >
                  income
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     isActive ? 'active-nav-link' : null
                  }
                  to='vans'
               >
                  vans
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     isActive ? 'active-nav-link' : null
                  }
                  to='reviews'
               >
                  reviews
               </NavLink>
            </nav>
            <Outlet />
         </HostNavWrapper>
      </>
   )
}

export default HostNav

const HostNavWrapper = styled.div`
   padding: 2rem 1.5rem;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   background-color: rgba(222, 222, 222, 0.5);
   nav {
      display: flex;
      gap: 1.5rem;
      margin-block-end: 3rem;
   }
   .active-nav-link {
      text-decoration: underline;
      color: var(--brand);
      font-weight: 600;
   }
   a {
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
      transition: 500ms ease;
      outline: none;
      :hover,
      :focus-visible {
         color: #000;
      }
   }
`
