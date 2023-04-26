
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { wait } from '../utils/utils'
import Loading from '../components/Loading'

const Vans = () => {
   const [vans, setVans] = useState([])
   const [button, setButton] = useState(null)
   const [activeFilter, setActiveFilter] = useState(null)
   const [loading, setLoading] = useState(true)

   const fetchData = useCallback(async() => {
      try {
         const {data: {vans}} = await axios('/api/vans')
         console.log(vans)
         setVans(vans)
         setButton([...new Set(vans.map(el => {
            return el.type
         }))])
         await wait(500)
         setLoading(false)
      } catch (error) {
         console.log(error)
      }

   },[])

   const filterVans = (filterString) => {
      console.log(filterString)
      setActiveFilter(filterString)
   }

   useEffect(() => {
      fetchData()
      console.log(button)
   },[fetchData])
   
   if(loading){
      return <Loading/>
   }
   return (
   <VansWrapper>
      <h2>Explore our van options</h2>
      <div className="filter-options">
         {(button ?? []).map((el, index) => {
            return <button key={index} className={`filter-btn ${activeFilter === el ? "is-active" : ""}`} onClick={() => filterVans(el)}>{el}</button>
         })}
         <button onClick={() => filterVans(null)} className="clear-filter">clear filters</button>
      </div>
      <div className="vans-container">
         {(vans ?? []).filter(van => {
            if(!activeFilter) return van
            return van.type === activeFilter
         }).map(van => {
            const {id, name, price, imageUrl, type} = van
            return (

               <Link to={`/vans/${id}`} key={id} className="single-van">
                  <img src={imageUrl}></img>
                  <header>
                     <div className="name">{name}</div> 
                     <div className="price">{`${price}€`}</div>
                  </header>
                  <ButtonStyle buttonColor={
                     type === "simple" ? "steelblue" : type === "luxury" ? "goldenrod" : 'teal'
                  }>{type}</ButtonStyle>
               </Link>
            )
         })}
      </div>
   </VansWrapper>)
}

export default Vans

const VansWrapper = styled.section`
   background-color: rgba(222, 222, 222, 0.5);
   padding: 2rem 1.5rem;
   .filter-options {
      margin-block: 1rem;
      display: flex;
      gap: 1rem;
      font-size: 1.1rem;
      color: rgba(0,0,0,0.8);
      .filter-btn {
         background-color: #fde7c9;
         padding: 0.5rem 1rem;
         cursor: pointer;
         opacity: 0.8;
         transition: 0.25s ease;
         :hover{
            opacity: 1;
         }
      }
      .filter-btn.is-active{
         background-color: var(--brand);
         opacity: 1;
      }
      
      .clear-filter{
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
