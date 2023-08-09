import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image11 from '../assets/Images/IMG_11.jpeg';

const Hero = () => {
    return (
        <>
            <div className='h-[100vh] hero-bg flex items-center justify-between px-5 md:px-12 lg:px-12 xl:px-20'>

                <div className='lg:w-[50%] xl:w-[60%] flex flex-col gap-3 text-white font-bold'>
                    <div className='text-2xl lg:text-3xl xl:text-5xl hero-font tracking-widest'>Nivedita Thalassaemia Control & Awareness Society</div>
                    <div>ESTD 2006-2007</div>
                    <div className='flex gap-2 md:gap-2'>
                        <a href="https://www.facebook.com/profile.php?id=100085725510907&mibextid=ZbWKwL" target='_blank'><FacebookIcon style={{ fontSize: 25 }} /> </a>
                        <a href="https://youtube.com/@niveditathalassaemia5417" target='_blank'><YouTubeIcon style={{ fontSize: 25 }} /></a>
                        <a href="https://instagram.com/niveditathalassaemia?igshid=MzRlODBiNWFlZA==" target='_blank'><InstagramIcon style={{ fontSize: 25 }} /></a>
                    </div>
                </div>
                {/* <div className='lg:w-[45%] xl:w-[40%] pt-5 '>
                    <img className='lg:flex rounded-lg hidden shadow-lg' src={Image11} alt="Image" />
                </div> */}
            </div>
        </>
    )
}

export default Hero