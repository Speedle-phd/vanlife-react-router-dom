import React, { Suspense, useState } from 'react'
import styled from 'styled-components'
import { Link, useLoaderData, Await } from 'react-router-dom'
import Loading from '../components/Loading'

const UserVans = () => {
   const loaderPromise = useLoaderData()


   function renderUserVans (vans) {

      const renderVans = (vans ?? []).map((el) => {
         const { name, imageUrl, id, price } = el
         console.log(id)
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

      return (
         <UserVansWrapper>
            <div className='user-vans'>
               <header>
                  <h3>Your listed vans</h3>
               </header>
               <div className='van-container'>
                  {renderVans}
               </div>
            </div>
         </UserVansWrapper>
      )
   }


   return (
      <Suspense fallback={<Loading />}>
         <Await resolve={loaderPromise.data}>
            {renderUserVans}
         </Await>
      </Suspense>
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
