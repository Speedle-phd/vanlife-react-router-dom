import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
   return (
      <NavbarWrapper>
         <Link className='brand-logo' to='/'>
            #vanlife
         </Link>
         <div className='nav-links'>
            <NavLink className={({isActive}) =>  isActive ? 'active-nav-link' : null} to='/about'>about</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active-nav-link' : null} to='/vans'>vans</NavLink>
         </div>
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
`
