import React from 'react'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
import { reviewPNG } from '../assets/images/reviews-graph.png'

const Reviews = () => {
   return (
      <ReviewWrapper>
         <header className='review-header'>
            <h2>Your reviews</h2>
            <p>
               last <span>30 days</span>
            </p>
         </header>
         <img src={reviewPNG} alt='' />
         <div className='review-container'>
            <h4>Reviews(2)</h4>
            <div className='review-boxes'>
               <div className='single-review'>
                  <div className='icon-container'>
                     <AiFillStar />
                     <AiFillStar />
                     <AiFillStar />
                     <AiFillStar />
                     <AiFillStar />
                  </div>
                  <header>
                     <div className='name'>Yoko</div>
                     <div className='date'>December 1, 2022</div>
                  </header>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Asperiores, cumque illo. Commodi delectus eveniet quisquam!
                     Molestiae quo, hic distinctio odio id molestias
                     exercitationem obcaecati iste impedit asperiores, a minus,
                     eligendi dignissimos voluptatibus alias!
                  </p>
                  <hr />
               </div>
               <div className='single-review'>
                  <div className='icon-container'>
                     <AiFillStar />
                     <AiFillStar />
                     <AiFillStar />
                     <AiFillStar />
                     <AiFillStar />
                  </div>
                  <header>
                     <div className='name'>Yoko</div>
                     <div className='date'>December 12, 2022</div>
                  </header>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Asperiores, cumque illo. Commodi delectus eveniet quisquam!
                  </p>
                  <hr />
               </div>
            </div>
         </div>
      </ReviewWrapper>
   )
}

export default Reviews

const ReviewWrapper = styled.section`
   width: min(60rem, 100%);
   margin-inline: auto;
   .review-header{
      display: flex;
      align-items: center;
      gap: 1rem;
      p{
         font-size: 0.75rem;
         align-self: flex-end;
      }
      span{
         text-decoration: underline;
         font-weight: 600;
      }
   }
   img {
      width: 100%;
      margin-block: 2rem;
   }
   .review-container{
      margin-inline: -1rem;
      .review-boxes{
         margin-block-start: 2rem;
         padding: 2rem 1rem;
         background-color: #f2f2dd;
         .icon-container{
            margin-block: 0.8rem;
         }
         svg{
            color: goldenrod;
         }
         header{
            display: flex;
            gap: 0.4rem;
            align-items: center;
            margin-block-end: 0.5rem;
            .date{
               color: rgba(0,0,0,0.5);
            }
            .name{
               font-size: 1.2rem;
               font-weight: 600;
            }
         }
         hr{
            margin-block: 2rem;
         }
      }
   }
`
