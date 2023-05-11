import React, { Suspense, useState } from 'react'
import { Await, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import Loading from './Loading'


const SingleVanNav = () => {
   const loaderPromise = useLoaderData()
   

   function renderSingleVanNav(van){
   return (
      <SingleVanNavWrapper>
         <div className='basic-infos'>
            <img src={van?.imageUrl} alt='' />
            <div className='content'>
               <h4>{van?.name}</h4>
               <p>
                  {van?.price}€<span>/day</span>
               </p>
            </div>
         </div>
         <div className='single-van-navigation'>
            <NavLink
               className={({ isActive }) =>
                  isActive ? 'active-single-van' : null
               }
               to=''
               end
            >
               Details
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive ? 'active-single-van' : null
               }
               to='pricing'
            >
               Pricing
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive ? 'active-single-van' : null
               }
               to='photos'
            >
               Photos
            </NavLink>
         </div>
         <Outlet context={van} />
      </SingleVanNavWrapper>
   )
   }
   return (
      <Suspense fallback={<Loading/>}>
         <Await resolve={loaderPromise.data}>
            {renderSingleVanNav}
         </Await>
      </Suspense>
   )

}

export default SingleVanNav

const SingleVanNavWrapper = styled.div`
   img {
      width: 100px;
      height: 100px;
   }
   .basic-infos {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      .content {
         display: flex;
         flex-direction: column;
         gap: 0.5rem;
         p {
            font-weight: 600;
            font-size: 1.1rem;
            span {
               font-weight: 400;
               font-size: 0.9rem;
               color: rgba(0, 0, 0, 0.6);
            }
         }
      }
   }
   .single-van-navigation {
      display: flex;
      margin-block: 2rem;
      gap: 1rem;
   }
   .active-single-van {
      text-decoration: underline;
      color: var(--brand);
      font-weight: 600;
   }
`

