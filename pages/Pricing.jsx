import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Pricing = () => {
   const data = useOutletContext()
   return (
      <div>
         <p style={{fontWeight: 600, fontSize: "1.4rem"}}>
            {`€${data?.price}`}
            <span style={{ color: 'rgba(0,0,0,.6)', fontSize: "0.8rem" }}>/day</span>
         </p>
      </div>
   )
}

export default Pricing
