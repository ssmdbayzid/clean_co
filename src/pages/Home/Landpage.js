import React from 'react'
import buckergirls from '../../assets/images/bucketgirl.png'
import Button from '../../components/Share.js/Button'

const Landpage = () => {
  return (
    <>
      <div className="hero sm:h-screen lg:h-[80vh] mt-16 bg-accent ">
      <div className="hero-content flex-col lg:flex-row">
        <div className='max-w-xl'>
            <p 
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className='text-lg'>Best Quality</p>
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="900"
           className="text-5xl font-bold">Professional Cleaning Service</h1>
          <p
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
          className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
          {/* 
          ============== This btn was tutorial btn below i create practice btn
          <button
          data-aos="zoom-in"
          data-aos-delay="1200"
          className='btn btn-primary'
          >Get Start</button> */}
          <button
          data-aos="zoom-in"
          data-aos-delay="1000"
          
          className='btn btn-primary'
          >Get Start</button>
        </div>
        {/* shrink use for this content would not compressed for other section/div */}
        <div className='h-[80vh] shrink-0'>
        <img src={buckergirls} className="h-full shrink-0" alt='' />
        </div> 
      </div>
    </div>
    <div className='relative top-[-30px] md:top-[-20px] mx-auto w-5/6 shadow bg-base-200 p-10 rounded-2xl'>
      <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3'>
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      </div>
      <br />
      <Button className="mt-2">REQUEST A QOUTE</Button>
    </div>
    </>
  )
}

export default Landpage;