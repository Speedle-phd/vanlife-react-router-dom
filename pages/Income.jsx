import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import incomePNG from '../assets/images/income-graph.png'

const Income = () => {
   return (
      <IncomeWrapper>
         <div className='overview'>
            <h2>Income</h2>
            <p>
               Last <span>30 days</span>
            </p>
            <div className='income'>€2,260</div>
         </div>
         <img src={incomePNG} alt="" />
         <div className='user-transactions'>
            <header>
               <h3>Your transactions(3)</h3>
               <p>
                  Last <span>30 days</span>
               </p>
            </header>
            <div className='transaction-container'>
               <div className="single-transaction">
                  <div className="single-income">555€</div>
                  <div className="date">23.11.2012</div>
               </div>
               <div className="single-transaction">
                  <div className="single-income">555€</div>
                  <div className="date">22.12.2013</div>
               </div>
               <div className="single-transaction">
                  <div className="single-income">555€</div>
                  <div className="date">23.01.2014</div>
               </div>
            </div>
         </div>
      </IncomeWrapper>
   )
}

const IncomeWrapper = styled.section`
   width: min(60rem, 100%);
   margin-inline: auto;
   span {
      text-decoration: underline;
      font-weight: 600;
   }
   a {
      color: #222;
      :hover,
      :focus-visible {
         color: var(--brand);
         font-weight: 600;
      }
   }
   .overview {
      background-color: #fff;
      padding: 1.3rem 1rem;
      margin-inline: -1rem;
      border-radius: 3px 3px 0 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;

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
   .user-transactions {
      header {
         margin-block: 2rem;
         display: flex;
         justify-content: space-between;
      }
   }
   .transaction-container {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin-inline: -1rem;
   }
   .single-transaction {
      background-color: #fff;
      padding: 1rem;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .date{
         font-size: 0.8rem;
         color: rgba(0, 0, 0, 0.6);
      }
      .single-income{
         font-size: 1.8rem;
         font-weight: 600;
      }
   }
   img {
      width: 100%;
   }
`

export default Income
