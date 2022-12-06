import React from 'react'
import buckergirls from '../../assets/images/bucketgirl.png'
import Button from '../../components/Share.js/Button'

const Landpage = () => {
  return (
    <div className="hero h-screen lg:h-[60vh] mt-16 bg-accent ">
  <div className="hero-content flex-col lg:flex-row">
    <div className='max-w-xl'>
        <p className='text-lg'>Best Quality</p>
      <h1 className="text-5xl font-bold">Professional Cleaning Service</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
      <Button>Get Start</Button>
    </div>
    {/* shrink use for this content would not compressed for other section/div */}
    <div className='h-[60vh] shrink-0'>
    <img src={buckergirls} className="h-full" alt='' />
    </div>
  </div>
</div>
  )
}

export default Landpage