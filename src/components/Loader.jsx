import React from 'react'
import Gif from '../assets/Images/blood.gif';


const Loader = () => {
    return (
        <div className='h-screen w-full flex'>

            <div className='flex m-auto items-center gap-1.5'>
                <img className='w-20' src={Gif} alt="Logo" />
                <div className='text-lg font-bold text-[#FF5C5C]'>
                    <div>Nivedita</div>
                    <div>Thalassaemia</div>
                </div>
            </div>

        </div>
    )
}

export default Loader