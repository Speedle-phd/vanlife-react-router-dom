import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RootLayout from '../layout/RootLayout'

const NotFound = () => {
   return (
      <RootLayout>
         <NotFoundWrapper>
            Error 404 - Page Not Found
            <Link to='/'>Return to Home</Link>
         </NotFoundWrapper>
      </RootLayout>
   )
}

export default NotFound

const NotFoundWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-size: 2rem;
   gap: 2rem;
   a {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.7);
      transition: 500ms ease;
      outline: none;
      :hover,
      :focus-visible {
         color: var(--brand);
      }
   }
`
