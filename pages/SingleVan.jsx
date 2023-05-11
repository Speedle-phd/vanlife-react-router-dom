import { useCallback, useEffect, useState, Suspense } from 'react'
import { Link, useLoaderData, useLocation, useParams, Await } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { BsArrowLeftShort } from 'react-icons/bs'
import { wait } from '../utils/utils'
import Loading from '../components/Loading'
import Error from '../components/Error'

const SingleVan = () => {
   const location = useLocation()
   const sp = new URLSearchParams(location.state).toString()
   const filterHistory = location.state?.filter || null

   const loaderPromise = useLoaderData()
   // const [van, setVan] = useState(loaderData)

   function renderSingleVan (van)  {
      console.log(van)
      return (
         <VanWrapper>
            <div className='vans-link'>
               <BsArrowLeftShort />
               <Link to={sp ? `/vans?${sp}` : `/vans`}>
                  {filterHistory ? `Back to ${filterHistory} vans` : "Back to all vans"}
               </Link>
            </div>
            <div className='van-container'>
               <div className="column">
                  <img src={van?.imageUrl} alt='' />
                  <button
                     style={{
                        backgroundColor:
                           van?.type === 'simple'
                              ? 'steelblue'
                              : van?.type === 'luxury'
                              ? 'goldenrod'
                              : 'teal',
                     }}
                     className='btn-type'
                  >
                     {van?.type}
                  </button>
               </div>
   
               <div className="column">
                  <h2>{van?.name}</h2>
                  <div className='price'>
                     {van?.price}€<span>/day</span>
                  </div>
                  <p>{van?.description}</p>
                  <Link className='rent-van' to='#'>
                     <button>Rent this van</button>
                  </Link>
               </div>
            </div>
         </VanWrapper>
      )

   }
   return (
      <Suspense fallback={<Loading/>}>
         <Await resolve={loaderPromise.dataPromise}>
            {renderSingleVan}
         </Await>
      </Suspense>
   )


}

export default SingleVan

const VanWrapper = styled.article`
   background-color: rgba(222, 222, 222, 0.5);
   padding: 2rem 1.5rem;
   .column:nth-child(1) {
      @media screen and (min-width: 1000px) {
         display: flex;
         flex-direction: column;
         flex: 1 0 50%;
      }
   }
   .column:nth-child(2) {
      @media screen and (min-width: 1000px) {
         display: flex;
         flex-direction: column;
         flex: 1 1 40%;
         padding: 10rem 1rem;
      }
   }
   .vans-link {
      margin-block: 1.6rem;
      text-decoration: underline;
      display: flex;
      gap: 1rem;
   }
   .van-container {
      width: 100%;
      @media screen and (min-width: 1000px) {
         display: flex;
         gap: 2rem;
      }
      img {
         width: 100%;
         max-width: max-content;
         margin-block-end: 2rem;
      }
      .btn-type {
         width: max-content;
         padding: 0.5rem 1rem;
         border-radius: 5px;
         color: white;
         opacity: 0.85;
         transition: 0.5s ease;
         margin-block-end: 1rem;
         cursor: pointer;
         :hover {
            opacity: 1;
         }
      }
      h2 {
      }
      .price {
         margin-block: 1rem;
         font-weight: 600;
         font-size: 1.25rem;
         span {
            font-size: 1rem;
            font-weight: 400;
         }
      }
      p {
         line-height: 1.3rem;
         color: rgba(0, 0, 0, 0.7);
      }
      .rent-van {
         display: flex;
         justify-content: center;
         button {
            background-color: var(--brand);
            width: clamp(20rem, 100%, 70rem);
            color: white;
            border-radius: 5px;
            padding-block: 0.8rem;
            opacity: 0.8;
            margin-block: 1rem;
            font-weight: 600;
            cursor: pointer;
            :hover {
               opacity: 1;
            }
         }
      }
   }
`
