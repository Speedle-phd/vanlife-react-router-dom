import React from 'react'
import { useOutletContext } from 'react-router-dom'

const General = () => {
   const data = useOutletContext()
   
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}className="general-content">
      <h4>Name: <span style={{fontWeight: 400, color: "rgba(0,0,0,.6)"}}>{data?.name}</span></h4>
      <h4>Category: <span style={{fontWeight: 400, color: "rgba(0,0,0,.6)", textTransform: "capitalize"}}>{data?.type}</span></h4>
      <h4>Description: <span style={{fontWeight: 400, color: "rgba(0,0,0,.6)"}}>{data?.description}</span></h4>
      <h4>Viability: <span style={{fontWeight: 400, color: "rgba(0,0,0,.6)", textTransform: "capitalize"}}>Public</span></h4>
    </div>
  )
}

export default General
