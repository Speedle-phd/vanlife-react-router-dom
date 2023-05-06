import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { wait } from '../utils/utils'
import axios from 'axios'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Dashboard = () => {
   const [vans, setVans] = useState()
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(true)
   const [userId, setUserId] = useState('123')

   const fetchData = useCallback(async () => {
      try {
         const {
            data: { vans },
         } = await axios('/api/host/vans')
         console.log(vans)
         setVans(vans)
         await wait(500)
         setLoading(false)
      } catch (error) {
         console.log(error)
         setError(true)
      }
   }, [])

   useEffect(() => {
      fetchData()
   }, [fetchData])
   return (
      <DashboardWrapper>
         <div className='overview'>
            <h2>Welcome!</h2>
            <div>
               <p>
                  Income last <span>30 days</span>
               </p>
               <Link to='/host/income'>Details</Link>
            </div>
            <div className='income'>€2,260</div>
         </div>
         <div className='review-score'>
            <p>
               <span>Review score:</span>
               <AiFillStar /> <span>5.0</span>/5
            </p>
            <Link to='/host/reviews'>Details</Link>
         </div>
         <div className='user-vans'>
            <header>
               <h3>Your listed vans</h3>
               <Link to='/host/vans'>View all</Link>
            </header>
            <div className='van-container'>
               {loading ? (
                  <Loading />
               ) : error ? (
                  <Error />
               ) : (
                  (vans ?? [])
                     .filter((el) => el.hostId === userId)
                     .map((el) => {
                        const { name, imageUrl, id, price } = el
                        return (
                           <div key={id} className='single-van'>
                              <div className='content'>
                                 <img src={imageUrl} alt='' />
                                 <div className='info'>
                                    <h4>{name}</h4>
                                    <p>{price}€/day</p>
                                 </div>
                              </div>
                              <Link to={`/host/vans/${id}`}>Edit</Link>
                           </div>
                        )
                     })
               )}
            </div>
         </div>
      </DashboardWrapper>
   )
}

export default Dashboard

const DashboardWrapper = styled.section`
   width: min(60rem, 100%);
   margin-inline: auto;
   a {
      color: #222;
      :hover,
      :focus-visible {
         color: var(--brand);
         font-weight: 600;
      }
   }
   .overview {
      background-color: #fef9c8;
      padding: 1.3rem 1rem;
      margin-inline: -1rem;
      border-radius: 3px 3px 0 0;

      .income {
         font-size: 2rem;
         font-weight: 700;
      }
   }
   .overview > h2 + div {
      display: flex;
      justify-content: space-between;
      margin-block: 1rem;
      color: rgba(0, 0, 0, 0.6);
      p span {
         text-decoration: underline;
         font-weight: 600;
         color: #222;
      }
   }
   .review-score {
      display: flex;
      justify-content: space-between;
      margin-inline: -1rem;
      padding: 2rem 1rem;
      background-color: #fed9a9;
      border-radius: 0 0 3px 3px;
      p {
         display: flex;
         align-items: center;
         span {
            font-weight: 600;
         }
         svg {
            color: goldenrod;
            margin-inline: 0.7rem;
         }
      }
   }
   .user-vans {
      header {
         margin-block: 2rem;
         display: flex;
         justify-content: space-between;
      }
   }
   .van-container {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin-inline: -1rem;
   }
   .single-van {
      background-color: #fff;
      padding: 1rem;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .content {
         display: flex;
         align-items: center;
         gap: 0.5rem;
         .info {
            p {
               color: rgba(0, 0, 0, 0.6);
               margin-block-start: 0.3rem;
            }
         }
      }
   }
   img {
      width: 70px;
      height: 70px;
   }
`
