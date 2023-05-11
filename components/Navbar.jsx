import { Link, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalAuth } from '../context/AuthContextProvider'

const Navbar = () => {
   const {token, setToken} = useGlobalAuth()
   const {pathname: path} = useLocation()
   return (
      <NavbarWrapper>
         <Link className='brand-logo' to='/'>
            #vanlife
         </Link>
         <div className='nav-links'>
            <NavLink className={({isActive}) =>  isActive ? 'active-nav-link' : null} to='/host'>host</NavLink>
            <NavLink className={({isActive}) =>  isActive ? 'active-nav-link' : null} to='/about'>about</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active-nav-link' : null} to='/vans'>vans</NavLink>
         </div>
         {token
         ? 
         path !== "/login" && <button className="login" onClick={() => {
            setToken(undefined)
            localStorage.clear('react-router-dom-tut-auth')
         }}>Log out</button>
         :
         path !== "/login" && <Link className="login" to="/login">Login</Link>
         }
      </NavbarWrapper>
   )
}

export default Navbar

const NavbarWrapper = styled.nav`
   display: flex;
   padding: 2.5rem 1.5rem;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   background-color: #fff;
   align-self: flex-start;
   box-shadow: 0 -10px 20px 0 rgba(0,0,0,0.5);
   position: relative;
   isolation: isolate;
   .brand-logo {
      color: #222;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 900;
   }
   .nav-links {
      display: flex;
      gap: 1rem;
      text-transform: capitalize;
      font-weight: 600;
   }
   .active-nav-link{
      position: relative;
      transition: 0.5s ease;
   }
   .active-nav-link::after {
      content: '';
      position: absolute;
      height: 3px;
      width: 100%;
      bottom: -5px;
      left: 0;
      background-color: var(--brand);
   }
   .login{
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background-color: var(--brand);
      color: white;
      border-radius: 100vmin;
      padding: 0.5rem 0.75rem;
      opacity: 0.7;
      transition: 250ms ease;
      :hover, :focus-visible{
         opacity: 1;
      }
   }
`
