import React from 'react'

const About = () => {
  return (
    <>
      <div id='about' className='h-[100vh] bg-[#FFEDED] flex items-center justify-center px-4 md:px-12 lg:px-12 xl:px-20'>
        <div className='lg:w-[60%] xl:w-[40%] flex flex-col gap-6 items-center p-2'>
          <div className='font-bold text-2xl lg:text-3xl'>About Us</div>
          <div className='font-semibold lg:text-lg text-gray-600 text-center'>Nivedita Thalassaemia Control & Awareness Society is a non-profit organization that was founded in 2015 by a group of dedicated volunteers who wanted to make a difference in the lives of Thalassaemia patients and their families. We are registered with the government since 2006 and have been working tirelessly to provide blood donation services, HPLC tests, financial support and educational assistance to Thalassaemia patients and their families in West Bengal. We also aim to help the needy disabled people with wheelchairs, sewing machines and other means of livelihood. We believe that every life is precious and deserves dignity and respect. We are committed to serving the society with love and care.</div>
        </div>
      </div>
    </>
  )
}

export default About