import React from 'react'
import { useParams, useRouteError } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
   const error = useRouteError()
   return (
      <ErrorWrapper>
         <h2>Error {error.status}</h2>
         <p>{error.message}</p>
      </ErrorWrapper>
   )
}

export default Error

const ErrorWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 2rem;
   h2 {
      color: var(--brand);
   }
   p {
      color: rgba(222, 0, 0, 0.5);
   }
`
