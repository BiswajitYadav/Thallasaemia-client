import React from 'react'
import Image14 from '../assets/Images/IMG_14.jpeg';

const Vision = () => {
  return (
    <>
      <div id='vision' className='h-[100vh] bg-[#FF3A3A] flex flex-col md:flex-row text-white'>

        <div className='h-[50%] md:h-auto md:w-[40%] lg:w-[55%] flex flex-col gap-6 p-7 justify-center'>
          <div className='font-bold text-2xl lg:text-3xl'>Our Vision</div>
          <div className='font-semibold lg:text-lg'>“Our vision is to create a Thalassaemia-free society and a more inclusive and compassionate community for the disabled people in West Bengal.”</div>
        </div>

        <div className='h-[50%] md:h-auto md:w-[60%] lg:w-[45%]'>
          <img className='w-full h-full object-cover' src={Image14} alt="" />
        </div>
      </div>
    </>
  )
}

export default Vision