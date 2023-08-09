import * as React from 'react';
import Logo from '../assets/Images/ngo-logo.png';
import { useState } from 'react';

const Header = () => {

    const [navBarOpen, setNavBarOpen] = useState(false)
    const handleOpen = () => setNavBarOpen(true);
    const handleClose = () => setNavBarOpen(false);

    return (
        <>
            {/* <div className={navBarOpen ? 'bg-[#FFFFFF] select-none sticky z-10 top-0' : 'bg-[#FFFFFF] select-none'}> */}
            <div className='bg-[#FFFFFF] select-none'>

                {/* nav for desktop */}

                <div className='hidden lg:flex justify-between px-2 lg:px-10 py-2.5 fixed w-full bg-white shadow-md z-10'>
                    <div className='flex items-center gap-1.5'>
                        <img className='w-12' src={Logo} alt="Logo" />
                        <div className='text-sm font-bold text-[#FF5C5C]'>
                            <div>Nivedita</div>
                            <div>Thalassaemia</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-1.5 lg:gap-5 text-[#FF5C5C] font-bold'>
                        <a className='hover:scale-110 duration-200' href="#home">Home</a>
                        <a className='hover:scale-110 duration-200' href="#mission">Our Mission</a>
                        <a className='hover:scale-110 duration-200' href="#vision">Our Vision</a>
                        <a className='hover:scale-110 duration-200' href="#activity">Our Activities</a>
                        <a className='hover:scale-110 duration-200' href="#about">About Us</a>
                        <a className='hover:scale-110 duration-200' href="#gallery">Gallery</a>
                    </div>

                    <div className='flex gap-1 items-center font-semibold'>
                        <a href="#contact" className='border-2 border-[#FF5C5C] text-[#FF5C5C] text-sm px-3 lg:px-10 py-1.5 font-bold hover:shadow-md duration-300 rounded-md hover:text-white hover:bg-[#FF5C5C]'>
                            CONTACT US
                        </a>
                    </div>

                </div>

                {/* nav for smaller devices */}

                <div className='flex lg:hidden justify-between items-center p-4 fixed w-full bg-white z-20'>
                    <div className='flex items-center gap-1.5'>
                        <img className='w-10' src={Logo} alt="Logo" />
                        <div className='text-sm font-bold text-[#FF5C5C]'>
                            <div>Nivedita</div>
                            <div>Thalassaemia</div>
                        </div>
                    </div>

                    <button onClick={navBarOpen ? handleClose : handleOpen} className='flex gap-1 flex-col'>
                        <div className={navBarOpen ? 'border-[3px] border-[#FF5C5C] w-8 rounded-full rotate-45 translate-y-1 duration-300' : 'border-[3px] border-[#FF5C5C] w-8 rounded-full duration-300'}></div>

                        {navBarOpen ? "" : <div className='border-[3px] border-[#FF5C5C] w-8 rounded-full'></div>}

                        <div className={navBarOpen ? 'border-[3px] border-[#FF5C5C] w-8 rounded-full -rotate-45 -translate-y-1 duration-300' : 'border-[3px] border-[#FF5C5C] w-8 rounded-full duration-300'}></div>
                    </button>

                </div>
                {navBarOpen ?
                    <div className={navBarOpen?'w-full flex flex-col gap-2 py-5 px-5 bg-white border border-t-2 h-max shadow-lg duration-300 fixed z-10':'w-full flex flex-col gap-0 py-0 px-0 border border-t-2 h-0 shadow-lg duration-300'}>
                        <div className='flex flex-col items-center gap-1  pt-20 text-[#FF5C5C] font-bold'>
                            <a onClick={handleClose} className='w-full py-1.5 text-center font-bold bg-slate-100 focus:bg-slate-200' href="#home">Home</a>
                            <a onClick={handleClose} className='w-full py-1.5 text-center font-bold bg-slate-100 focus:bg-slate-200' href="#mission">Our Mission</a>
                            <a onClick={handleClose} className='w-full py-1.5 text-center font-bold bg-slate-100 focus:bg-slate-200' href="#vision">Our Vision</a>
                            <a onClick={handleClose} className='w-full py-1.5 text-center font-bold bg-slate-100 focus:bg-slate-200' href="#activity">Our Activities</a>
                            <a onClick={handleClose} className='w-full py-1.5 text-center font-bold bg-slate-100 focus:bg-slate-200' href="#about">About Us</a>
                            <a onClick={handleClose} className='w-full py-1.5 text-center font-bold bg-slate-100 focus:bg-slate-200' href="#gallery">Gallery</a>
                        </div>
                        <hr />
                        <a href="#contact" onClick={handleClose} className='w-full py-1 text-center bg-white text-[#FF5C5C] border-2 border-[#FF5C5C] font-bold hover:text-white hover:bg-[#FF5C5C]'>
                            CONTACT US
                        </a>

                    </div>
                  : ""}
            </div>
        </>
    )
}

export default Header