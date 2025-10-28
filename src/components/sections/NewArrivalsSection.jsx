'use client';
import React from 'react';
import StickySection from './StickySection';
import Image from 'next/image';

const NewArrivalsSection = () => {
  return (
    <StickySection>
      <div className='flex flex-col items-center justify-center h-full bg-foreground text-white relative'>
        <Image
          src='https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.1.0'
          alt='Lo más nuevo'
          width={1920}
          height={1080}
          className={`w-full h-screen object-cover`}
        />
      </div>
      <div className='absolute inset-0 bg-black/35'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h4 className='uppercase text-3xl sm:text-4xl text-accent font-extrabold tracking-wider'>
          Lo más nuevo
        </h4>
        <div className='mt-4'>
          <a
            href='#'
            className='text-accent underline underline-offset-4 text-base'
          >
            Ver ahora
          </a>
        </div>
      </div>
    </StickySection>
  );
};

export default NewArrivalsSection;
