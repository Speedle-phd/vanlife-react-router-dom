import React from 'react'
import styled from 'styled-components'

const Error = ({id}) => {
  return (
    <ErrorWrapper>
      <h2>Error 404</h2>
      <p>There isn't a van with the requested id: {id}</p>
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
      color: rgba(0, 0, 0, 0.6);
   }
`


