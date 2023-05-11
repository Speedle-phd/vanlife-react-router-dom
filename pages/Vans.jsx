import { Suspense, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {
   Await,
   Link,
   useLoaderData,
   useParams,
   useSearchParams,
} from 'react-router-dom'
import { wait } from '../utils/utils'
import Loading from '../components/Loading'


const Vans = () => {
   // const [loading, setLoading] = useState(true)
   const loaderVans = useLoaderData()
   const [searchParams, setSearchParams] = useSearchParams()
   // const [vans, setVans] = useState(loaderVans)


   const setNewSearchParams = (k, v) => {
      const url = new URL(location)
      // const sp = new URLSearchParams(paramsString)
      const oldSp = Object.fromEntries([...url.searchParams.entries()])
      if (v === null) {
         delete oldSp[k]
         return setSearchParams(oldSp)
      }
      const newSp = { [k]: v }
      const paramsObj = { ...oldSp, ...newSp }
      setSearchParams(paramsObj)
   }

   // function handleFilterChange(k, v){          comes with useSearchParamsHook. Just like useState
   //    setSearchParams(prev => {
   //       if(!v) {
   //          prev.delete(key)
   //       } else {
   //          prev.set(k, v)
   //       }
   //       return prev
   //    })
   // }

   function renderVans(data) {
      const vans = data
      const buttonElements = [...new Set(
               (vans ?? []).map((el) => {
                  return el.type
               })
            ),
         ]
      
      const renderedButtons = (buttonElements ?? []).map((el, index) => {
         return (
            // <Link to={`.?filter=${el}`}>{el}</Link>
            <button
               key={index}
               className={`filter-btn ${
                  searchParams.get('filter') === el ? 'is-active' : ''
               }`}
               onClick={() => setNewSearchParams('filter', el)}
            >
               {el}
            </button>
         )
      })
      const vanElements = (vans ?? [])
         .filter((van) => {
            if (!searchParams.get('filter')) return van
            return van.type === searchParams.get('filter')
         })
         .sort((a, b) => {
            if (!searchParams.get('sort') || !a[searchParams.get('sort')])
               return
            const sortBy = searchParams.get('sort')
            if (sortBy === 'price') {
               return a[sortBy] - b[sortBy]
            } else {
               const el1 = a[sortBy].toUpperCase()
               const el2 = b[sortBy].toUpperCase()
               if (el1 < el2) {
                  return -1
               } else if (el1 > el2) {
                  return 1
               } else {
                  return 0
               }
            }
         })
         .map((van) => {
            const { id, name, price, imageUrl, type } = van
            return (
               <Link
                  to={`/vans/${id}`}
                  state={Object.fromEntries([...searchParams.entries()])}
                  key={id}
                  className='single-van'
               >
                  <img src={imageUrl}></img>
                  <header>
                     <div className='name'>{name}</div>
                     <div className='price'>{`${price}€`}</div>
                  </header>
                  <ButtonStyle
                     buttonColor={
                        type === 'simple'
                           ? 'steelblue'
                           : type === 'luxury'
                           ? 'goldenrod'
                           : 'teal'
                     }
                  >
                     {type}
                  </ButtonStyle>
               </Link>
            )
         })
      return (
         <VansWrapper>
            <h2>Explore our van options</h2>
            <div className='filter-options'>
               <div className='filter-container'>
                  {renderedButtons}
                  {searchParams.get('filter') && (
                     <button
                        onClick={() => setNewSearchParams('filter', null)}
                        className='clear-filter'
                     >
                        clear filters
                     </button>
                  )}
               </div>
               <div className='sort-container'>
                  <button onClick={() => setNewSearchParams('sort', 'name')}>
                     Sort by name
                  </button>
                  <button onClick={() => setNewSearchParams('sort', 'price')}>
                     Sort by price
                  </button>
               </div>
            </div>
            <div className='vans-container'>{vanElements}</div>
         </VansWrapper>
      )
   }

   return (
      <Suspense fallback={<Loading />}>
         <Await resolve={loaderVans.data}>{renderVans}</Await>
      </Suspense>
   )
}

export default Vans

const VansWrapper = styled.section`
   background-color: rgba(222, 222, 222, 0.5);
   padding: 2rem 1.5rem;
   .filter-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .sort-container {
      display: flex;
      gap: 1rem;

      button {
         cursor: pointer;
         color: rgba(0, 0, 0, 0.5);
         transition: 0.5s ease;
         :hover {
            color: #000;
         }
      }
   }
   .filter-container {
      margin-block: 1rem;
      display: flex;
      gap: 1rem;
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.8);
      .filter-btn {
         background-color: #fde7c9;
         padding: 0.5rem 1rem;
         cursor: pointer;
         opacity: 0.8;
         transition: 0.25s ease;
         :hover {
            opacity: 1;
         }
      }
      .filter-btn.is-active {
         background-color: var(--brand);
         opacity: 1;
      }

      .clear-filter {
         text-decoration: underline;
         text-transform: capitalize;
         cursor: pointer;
      }
   }
   .vans-container {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      .single-van {
         width: 100%;
      }
      img {
         width: 100%;
      }
      header {
         display: flex;
         justify-content: space-between;
         margin-block: 0.7rem;
         font-size: 1.12rem;
         font-weight: 600;
         .price {
            position: relative;
            ::after {
               content: '/day';
               position: absolute;
               right: 50%;
               bottom: -100%;
               translate: 50% 0;
               font-size: 0.85rem;
            }
         }
      }
      button {
         padding: 0.5rem 1rem;
         border-radius: 5px;
         color: white;
         opacity: 0.85;
         transition: 0.5s ease;
         cursor: pointer;
         :hover {
            opacity: 1;
         }
      }
   }
`
const ButtonStyle = styled.button`
   background-color: ${(props) => props.buttonColor || '#555'};
`
