
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import fetcher from '../../api'

const AddServices = () => {

  const [imgURL, setImgURL] = useState("")
  
  const {register, handleSubmit, reset} = useForm()
  console.log(imgURL)

  
  //* Form Submit -----
  const onSubmit = async (data) =>{
    const submitData = {...data, image: imgURL}
    const res = await fetcher.post("service", submitData)
    if(res){
      reset();
      setImgURL("")
      console.log(res);
    }
  }



  //* Image upload in Imagebb

  const handleImgUpload = (event) =>{
    
    const image = event.target.files[0]
    
    const formData = new FormData()
    
    formData.set("image", image)
    
    axios.post("https://api.imgbb.com/1/upload?key=bd573eba9da05ba5bc027008889e81d8", formData)
    .then((res)=>{  
      setImgURL(res.data.data.display_url); 
      setTimeout(console.log(imgURL), 1000)
    })
    .catch((error)=>{
      console.log(error)
    })  
  }
  
  

  return (    
    <div className="hero flex justify-center items-center mt-10 h-screen bg-accent">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-2xl text-primary font-bold text-center'>Add Service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label"
            htmlFor='serviceName'
          >
            <span className="label-text">Service Name</span>
          </label>
          <input id='serviceName' type="text" placeholder="Service Name" className="input input-bordered"
          required
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
          id='serviceCharge' required
          {...register("serviceCharge")}
          />

        </div>
        <div className="form-control">
        <label className="label"
            htmlFor='imgupload'
          >
            <span className="label-text">Upload Image</span>
          </label>
      <input type="file"
      id='imgupload'
      className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        </div>
        
        <div className="form-control mt-6">
          <button disabled={!imgURL ? true : false}
          className={!imgURL? "btn btn-primary" : " btn btn-primary"} 
          >Add Service</button>
          
        </div>
        </form>
      </div>
    </div>

</div>
  )
}

export default AddServices