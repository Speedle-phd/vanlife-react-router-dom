import styled from 'styled-components'

const Footer = () => {
   const currentYear = new Date().getFullYear()
   return (
      <>

            <FooterWrapper>
               <div>&copy; {currentYear} #vanlife</div>
            </FooterWrapper>

      </>
   )
}

export default Footer

const FooterWrapper = styled.footer`
   padding: 2.5rem 1.5rem;
   display: grid;
   place-content: center;
   text-transform: uppercase;
   font-weight: 600;
   background-color: #222;
   color: rgba(255, 255, 255, 0.4);
   word-spacing: 0.1rem;
   align-self: flex-end;
   box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.5);
`
