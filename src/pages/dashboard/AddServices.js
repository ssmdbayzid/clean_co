import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const AddServices = () => {

  const [service, setServices] = useState("")

  useEffect(()=>{
  /*  axios
    .get("http://localhost:5000/services")
    .then((res)=>setServices(res.data))
  */

// Immediate Function    
 (async () =>{
  const res = await axios.get("http://localhost:5000/services")
  console.log(setServices(res.data)) 
 })()
  
  },[])

  // console.log(service); 
  return (    
    <div>
      {
        service.map((s)=><div>
          <h1>Service Name <span>{s.service}</span></h1>
          <br />
          <h3>Price: <span>{s.Price}</span></h3>
        </div>)
      }

      </div>
  )
}

export default AddServices