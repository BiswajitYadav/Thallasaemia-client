import React from 'react'
import Image1 from '../assets/Images/image1.jpg';
import Image2 from '../assets/Images/image2.jpg';
import Image3 from '../assets/Images/image3.jpeg';
import Image4 from '../assets/Images/image4.jpg';
import Image5 from '../assets/Images/IMG_9.jpeg';

const Activities = () => {
    return (
        <>
            <div id='activity' className='xl:h-[100vh] flex flex-col justify-center bg-slate-100'>
                <div className="flex justify-center pb-3 pt-5 xl:pt-14 font-bold text-2xl lg:text-3xl">Our Activities</div>
                <div className='grid xl:grid-cols-5 p-2 gap-2'>
                    <div className='bg-white border-2 w-full h-full rounded-xl p-3 cursor-default hover:bg-[#FF3A3A] hover:text-white duration-300 md:flex xl:flex-col'>
                        <img className='h-[30vh] md:w-[34%] lg:w-[25%] xl:w-full w-full object-cover rounded-lg' src={Image1} alt="image1" />
                        <div className='py-1 font-semibold md:px-3 xl:px-0'>Various schools and colleges are conducting High-Performance Liquid Chromatography (HPLC) tests, while also spreading awareness about thalassemia and advocating the advantages of blood donation across different regions.</div>
                    </div>
                    <div className='bg-white border-2 w-full h-full rounded-xl p-3 cursor-default hover:bg-[#FF3A3A] hover:text-white duration-300 md:flex xl:flex-col'>
                        <img className='h-[30vh] md:w-[34%] lg:w-[25%] xl:w-full w-full object-cover rounded-lg' src={Image2} alt="image2" />
                        <div className='py-1 font-semibold md:px-3 xl:px-0'>Blood donation camps are being organized in multiple districts of West Bengal. </div>
                    </div>
                    <div className='bg-white border-2 w-full h-full rounded-xl p-3 cursor-default hover:bg-[#FF3A3A] hover:text-white duration-300 md:flex xl:flex-col'>
                        <img className='h-[30vh] md:w-[34%] lg:w-[25%] xl:w-full w-full object-cover rounded-lg' src={Image3} alt="image3" />
                        <div className='py-1 font-semibold md:px-3 xl:px-0'>Numerous blood donation campaigns are conducted in various government and private hospitals across West Bengal. However, there are noticeable challenges, as patients and ordinary individuals often struggle to access blood and end up having to purchase it. In response to this, our organization extends support by offering free blood donations through the selfless efforts of our volunteers and dedicated blood warriors.</div>
                    </div>
                    <div className='bg-white w-full border-2 h-full rounded-xl p-3 cursor-default hover:bg-[#FF3A3A] hover:text-white duration-300 md:flex xl:flex-col'>
                        <img className='h-[30vh] md:w-[34%] lg:w-[25%] xl:w-full w-full object-cover rounded-lg' src={Image4} alt="image4" />
                        <div className='py-1 font-semibold md:px-3 xl:px-0'>Our aim is to assist disabled and underprivileged individuals by offering them wheelchairs, sewing machines, and employment opportunities.</div>
                    </div>
                    <div className='bg-white w-full border-2 h-full rounded-xl p-3 cursor-default hover:bg-[#FF3A3A] hover:text-white duration-300 md:flex xl:flex-col'>
                        <img className='h-[30vh] md:w-[34%] lg:w-[25%] xl:w-full w-full object-cover rounded-lg' src={Image5} alt="" />
                        <div className='py-1 font-semibold md:px-3 xl:px-0'>Thalassemia patients are provided with food items and study materials to support their needs.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activities