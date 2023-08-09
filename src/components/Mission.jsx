import React from 'react'

const Mission = () => {
  return (
    <>
      <div id='mission' className='h-[100vh] bg-[#FFEDED] flex items-center justify-center px-4 md:px-12 lg:px-12 xl:px-20'>
        <div className='lg:w-[60%] xl:w-[40%] flex flex-col gap-6 items-center p-2'>
          <div className='font-bold text-2xl lg:text-3xl'>Our Mission</div>
          <div className='font-semibold lg:text-lg text-gray-600 text-center'>“Our mission is to provide blood donation services, HPLC tests, financial support and educational assistance to Thalassaemia patients and their families in West Bengal. We also aim to help the needy disabled people with wheelchairs, sewing machines and other means of livelihood.”</div>
        </div>
      </div>
    </>
  )
}

export default Mission