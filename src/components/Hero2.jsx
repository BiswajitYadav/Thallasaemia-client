import React from 'react'
import Image5 from '../assets/Images/IMG_5.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Hero2 = () => {
    return (
        <>
            <div id='home' className='w-full mx-auto lg:pt-[70px]'>
                <div className='h-[100vh] relative'>
                    <div className='absolute w-full h-[100vh] text-white bg-black/40 flex flex-col justify-center font-bold cursor-default px-4 md:px-8 lg:px-16'>
                        <div className='text-2xl lg:text-3xl xl:text-5xl hero-font'>Nivedita Thalassaemia Control & Awareness Society</div>
                        <div>ESTD 2006-2007</div>
                        <div className='flex gap-2 md:gap-2'>
                            <a className='hover:text-blue-500 duration-300' href="https://www.facebook.com/profile.php?id=100085725510907&mibextid=ZbWKwL" target='_blank'><FacebookIcon style={{ fontSize: 25 }} /> </a>
                            <a className='hover:text-red-600 duration-300' href="https://youtube.com/@niveditathalassaemia5417" target='_blank'><YouTubeIcon style={{ fontSize: 25 }} /></a>
                            <a className='hover:text-pink-600 duration-300' href="https://instagram.com/niveditathalassaemia?igshid=MzRlODBiNWFlZA==" target='_blank'><InstagramIcon style={{ fontSize: 25 }} /></a>
                        </div>
                    </div>
                    <img className='w-full h-[100vh] object-cover' src={Image5} alt="/" />

                </div>
            </div>
        </>
    )
}

export default Hero2