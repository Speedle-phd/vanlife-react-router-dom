import styled from 'styled-components'
import bgImg from '../assets/images/about-hero.png'
import {Link} from 'react-router-dom'
import Loading from '../components/Loading'
import { Suspense } from 'react'


const About = () => {
   return (
         <AboutWrapper>
            <img src={bgImg} />
            <AboutContainer className='text-container'>
               <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  aut et natus labore cumque, expedita sunt officia ab saepe? Aut,
                  quisquam iusto nesciunt ad dolores enim necessitatibus
                  exercitationem facere rem, corporis voluptatibus deserunt officia
                  molestiae incidunt.
               </p>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  sed quod sit ipsa ea impedit quis ratione vel iure.
               </p>
            </AboutContainer>
            <AboutContainer className='link-container'>
               <h3>Your destination is waiting.<br/>
               Your van is ready.</h3>
               <Link className="link" to="/vans"><button>Explore our vans</button></Link>
            </AboutContainer>
         </AboutWrapper>
   )
}

export default About

const AboutWrapper = styled.section`
   display: grid;
   grid-template-rows: 200px auto 1fr;
   background-color: rgba(222, 222, 222, 0.5);
   @media screen and (min-width: 640px) {
      grid-template-rows: 300px auto auto;
      text-align: center;
   }
   @media screen and (min-width: 1000px) {
      grid-template-rows: 400px auto auto;
   }
   img {
      height: 200px;
      width: 100%;
      object-fit: cover;
      object-position: center top;
      @media screen and (min-width: 640px) {
         height: 300px;
         object-position: center 25%;
      }
      @media screen and (min-width: 1000px) {
         height: 400px;
         object-position: center 25%;
      }
   }
   .text-container {
      h2 {
         font-size: 1.5rem;
         @media screen and (min-width: 500px) {
            font-size: 2rem;
         }
         @media screen and (min-width: 640px) {
            font-size: 2.5rem;
         }
      }
      p {
         font-size: 0.9rem;
         line-height: 1.2rem;
         color: rgba(0, 0, 0, 0.8);
         font-weight: 400;
         @media screen and (min-width: 500px) {
            font-size: 1rem;
         }
         @media screen and (min-width: 640px) {
            font-size: 1.2rem;
            line-height: 1.25rem;
         }
      }
   }
   .link-container {
      background-color: #d6a56e;
      margin: 1rem;
      border-radius: 5px;
      max-width: 80rem;
      box-shadow: 0 5px 10px rgba(214, 165, 110, 0.8),
         0 5px 20px 5px rgba(214, 165, 110, 0.3);
      @media screen and (min-width: 640px) {
         margin-inline: auto;
         min-width: 30rem;
      }
      .link{
         margin-inline: auto;
      }
      button {
         cursor: pointer;
         background-color: #222;
         color: white;
         padding: 0.75rem 1rem;
         font-size: 0.9rem;
         border-radius: 8px;
         transition: 0.5s ease;
         :hover {
            background-color: rgba(34, 34, 34, 0.85);
         }
      }
   }
`

const AboutContainer = styled.div`
   padding: 2rem 1.5rem;
   display: flex;
   flex-direction: column;
   gap: 1rem;
`