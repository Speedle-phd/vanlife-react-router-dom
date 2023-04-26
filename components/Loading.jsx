import styled, { keyframes } from "styled-components"


const Loading = () => {
  return (
    <LoadingWrapper>
      <Rotate className="circle"></Rotate>
    </LoadingWrapper>
  )
}

export default Loading

const rotate = keyframes`
   from{
      rotate: 0;
   }
   to {
      rotate: 360deg}
`

const LoadingWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`
const Rotate = styled.div`      
      width: 100px;
      height: 100px;
      border-top: var(--brand) 10px solid;
      border-right: var(--brand) 10px solid;
      border-radius: 50%;
      transition: border-right 0.5s ease-in-out;
      animation: ${rotate} infinite linear 1000ms;
`
