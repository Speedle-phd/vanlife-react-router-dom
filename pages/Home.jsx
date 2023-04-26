import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bgImage from './../assets/images/home-hero.png'

const Home = () => {
   return (
      <HomeWrapper>
         <div style={{backgroundImage: `url(${bgImage})`}}className='hero-background'></div>
         <div className='hero-content'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>
               Add adventure to your life by joining the #vanlife movement.
               <br />
               Rent the perfect can to make your perfect road trip.
            </p>
            <Link to='/vans'>
               <button>Find your van</button>
            </Link>
         </div>
      </HomeWrapper>
   )
}

export default Home

const HomeWrapper = styled.main`
   position: relative;
   isolation: isolate;
   overflow: hidden;
   .hero-background {
      
      background-size: cover;
      background-position: center;
      background-color: rgba(51, 51, 51);
      position: absolute;
      inset: 0;
      filter: brightness(0.4);
   }
   .hero-content {
      position: absolute;
      inset: 6rem 3rem;
      color: #fff;
      letter-spacing: 1.5px;
      @media screen and (max-width: 640px) {
         inset: 3rem 3rem;
      }
      h1 {
         font-size: 3rem;
         @media screen and (max-width: 640px) {
            font-size: 2.5rem;
         }
      }
      p {
         font-size: 1.1rem;
         line-height: 2rem;
      }
      button {
         color: #fff;
         width: 100%;
         margin-block: 3rem;
         padding-block: 1.5rem;
         background-color: var(--brand);
         border-radius: 3px;
         font-size: 1.2rem;
         font-weight: 600;
         opacity: 0.8;
         transition: 0.5s ease;
         cursor: pointer;
         :hover{
            opacity: 1;
         }
      }
   }
`
