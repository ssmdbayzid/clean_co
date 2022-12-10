import React from 'react'
import { ImGoogle2 } from 'react-icons/im';


const LogIn = () => {
  return (
    <div className="hero flex justify-center items-center h-screen bg-accent">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h1 className='text-2xl text-primary font-bold text-center'>Log In</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered bg" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover" >Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <div className="divider">OR</div>
          <button className="btn btn-accent ">
          <ImGoogle2 className='mr-3 text-2xl text-primary' />
          Log In with Google</button>
        </div>
      </div>
    </div>

</div>
  )
}

export default LogIn