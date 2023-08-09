import React, { useState } from 'react'
import Image1 from '../assets/Images/IMG_1.jpeg';
import Image2 from '../assets/Images/IMG_2.jpeg';
import Image3 from '../assets/Images/IMG_3.jpeg';
import Image4 from '../assets/Images/IMG_4.jpeg';
import Image5 from '../assets/Images/IMG_5.jpeg';
import Image6 from '../assets/Images/IMG_6.jpeg';
import Image7 from '../assets/Images/IMG_7.jpeg';
import Image8 from '../assets/Images/IMG_8.jpeg';
import Image9 from '../assets/Images/IMG_9.jpeg';
import Image10 from '../assets/Images/IMG_10.jpeg';
import Image11 from '../assets/Images/IMG_11.jpeg';
import Image12 from '../assets/Images/IMG_12.jpeg';
import Image13 from '../assets/Images/IMG_13.jpeg';
import Image14 from '../assets/Images/IMG_14.jpeg';
import Image15 from '../assets/Images/IMG_15.jpeg';
import Image16 from '../assets/Images/IMG_16.jpeg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const CarausalImages = [
  {
    original: Image1,
    thumbnail: Image1,
    description: 'Image 1',
  },
  {
    original: Image2,
    thumbnail: Image2,
    description: 'Image 2',
  },
  {
    original: Image4,
    thumbnail: Image4,
    description: 'Image 4',
  },
  {
    original: Image5,
    thumbnail: Image5,
    description: 'Image 5',
  },
  {
    original: Image6,
    thumbnail: Image6,
    description: 'Image 6',
  },
  {
    original: Image7,
    thumbnail: Image7,
    description: 'Image 7',
  },
  {
    original: Image8,
    thumbnail: Image8,
    description: 'Image 8',
  },
  {
    original: Image9,
    thumbnail: Image9,
    description: 'Image 9',
  },
  {
    original: Image10,
    thumbnail: Image10,
    description: 'Image 10',
  },
  {
    original: Image11,
    thumbnail: Image11,
    description: 'Image 11',
  },
  {
    original: Image12,
    thumbnail: Image12,
    description: 'Image 12',
  },
  {
    original: Image13,
    thumbnail: Image13,
    description: 'Image 13',
  },
  {
    original: Image14,
    thumbnail: Image14,
    description: 'Image 14',
  },
  {
    original: Image15,
    thumbnail: Image15,
    description: 'Image 15',
  },
  {
    original: Image16,
    thumbnail: Image16,
    description: 'Image 16',
  },

];

const Photos = () => {

  return (
    <>
      <div id='gallery'></div>
      {/* <div id='gallery' className='pt-20 pb-10 text-center font-bold text-2xl lg:text-3xl'>Gallery</div> */}

      <Carousel
        axis='horizontal'
        autoPlay={true}
        dynamicHeight={false}
        interval={3000}
        className='h-[100vh]'
        infiniteLoop
        showThumbs={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >

        {
          CarausalImages.map((data, index) => {
            return (
              <div key={index} className='h-[100vh] bg-black flex justify-center items-center'>

                <img src={data.original} alt={data.thumbnail} className='w-full h-full my-auto object-contain hidden md:flex' />

                {/* <div className='block md:hidden'>

                  <TransformWrapper>
                    <TransformComponent>
                      <img src={data.original} alt={data.original} className='w-full h-full my-auto object-contain ' />
                    </TransformComponent>
                  </TransformWrapper>

                </div> */}

              </div>

            )
          })
        }

      </Carousel>

    </>
  )
}

export default Photos