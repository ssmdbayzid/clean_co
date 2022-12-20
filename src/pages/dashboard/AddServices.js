
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import fetcher from '../../api'

const AddServices = () => {

  const [service, setServices] = useState("")

  const {register, handleSubmit, reset} = useForm()

  
  const addService = (data) =>{
    console.log(data)
    reset()
  }

  const handleImgUpload = (event) =>{
    
    const imgURL = event.target.files[0]

    const formData = new FormData()

    formData.set("image, imgURL")


    console.log(imgURL);
  }

  // console.log(service); 
  return (    
    <div className="hero flex justify-center items-center mt-10 h-screen bg-accent">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-2xl text-primary font-bold text-center'>Add Service</h1>
        <form onSubmit={handleSubmit(addService)}>
        <div className="form-control">
          <label className="label"
            htmlFor='serviceName'
          >
            <span className="label-text">Service Name</span>
          </label>
          <input id='serviceName' type="text" placeholder="Service Name" className="input input-bordered"
          {...register("serviceName")}
          />
        </div>
        <div className="form-control">
          <label className="label"
            htmlFor='serviceCharge'
          >
            <span className="label-text">Service Charge</span>
          </label>
          <input type="text" placeholder="Service Charge" className="input input-bordered bg" 
          id='serviceCharge'
          {...register("serviceCharge")}
          />

        </div>
        <div className="form-control">
          <label className="label"
            htmlFor='imgURL'
          >
            <span className="label-text">Image Upload</span>
          </label>
          <input type="file" className="input input-bordered bg" 
          id='imgURL' onChange={handleImgUpload}
          // {...register("image")}

          />

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Service</button>
          
        </div>
        </form>
      </div>
    </div>

</div>
  )
}

export default AddServices