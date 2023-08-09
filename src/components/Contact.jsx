import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  return (
    <>
      <div id='contact' className='h-[100vh] bg-[#FF3A3A] flex items-center'>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-2 text-white p-3 md:p-7'>

          <div className='flex flex-col md:text-lg lg:w-[70%]'>
            <div className='font-bold text-2xl lg:text-3xl py-3'>Contact Us</div>
            <div>Bandel, Sahaganj, Jhappukur power houses</div>
            <div>District - Hooghly</div>
            <div>Land mark (Bandel iti)</div>
            <div>Pin - 712104</div>
            <div>2nd branch (Muragacha,dharmmda bus stand)</div>
            <div>District - Nadia</div>
            <div>Pin : 731138</div>
            <div>Contact No. : <span className='font-semibold'>8100671968, 9331252413, 9339428225</span> </div>
          </div>

          <div className='flex flex-col gap-2 md:gap-2 lg:w-[30%] py-3'>
            <div className='font-bold text-2xl lg:text-3xl lg:py-2'>Follow Us On :</div>

            <div className="flex flex-col gap-2 lg:px-2">
              <a className='lg:text-lg font-bold flex' href="https://www.facebook.com/profile.php?id=100085725510907&mibextid=ZbWKwL" target='_blank'><span className='pr-1 hover:pr-2 duration-300'><FacebookIcon style={{ fontSize: 25 }} /></span>Facebook</a>
              <a className='lg:text-lg font-bold flex' href="https://youtube.com/@niveditathalassaemia5417" target='_blank'><span className='pr-1 hover:pr-2 duration-300'><YouTubeIcon style={{ fontSize: 25 }} /></span>YouTube</a>
              <a className='lg:text-lg font-bold flex' href="https://instagram.com/niveditathalassaemia?igshid=MzRlODBiNWFlZA==" target='_blank'><span className='pr-1 hover:pr-2 duration-300'><InstagramIcon style={{ fontSize: 25 }} /></span>Instagram</a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

