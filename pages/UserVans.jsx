import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { wait } from '../utils/utils'
import axios from 'axios'
import Loading from '../components/Loading'
import Error from '../components/Error'

const UserVans = () => {
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
      <UserVansWrapper>
   
         <div className='user-vans'>
            <header>
               <h3>Your listed vans</h3>
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
                           <Link to={`/host/vans/${id}`} key={id} className='single-van'>
                              <div className='content'>
                                 <img src={imageUrl} alt='' />
                                 <div className='info'>
                                    <h4>{name}</h4>
                                    <p>{price}€/day</p>
                                 </div>
                              </div>
                           </Link>
                        )
                     })
               )}
            </div>
         </div>
      </UserVansWrapper>
   )
}

export default UserVans

const UserVansWrapper = styled.section`
   width: min(60rem, 100%);
   margin-inline: auto;
   .user-vans {
      header {
         margin-block: 2rem;
         display: flex;
         justify-content: space-between;
         font-size: 1.5rem;
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
