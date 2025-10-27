'use client';

import StickySection from '@/components/sections/StickySection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <StickySection>
      <div className='flex items-center justify-center h-full bg-foreground text-accent relative'>
        <Image
          src='https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?ixlib=rb-4.1.0'
          alt='Hero Image'
          width={1920}
          height={1080}
          className='w-full h-full object-cover absolute top-0 left-0 object-[44%] sm:object-center'
        />
        <div className='absolute inset-0 bg-black/35'></div>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-6xl font-bold mb-4 uppercase'>Primavera 2025</h1>
          <p className='text-xl'>Explora lo último de la temporada</p>
          <div className='text-base font-normal mt-4'>
            <Link
              href='#'
              className='uppercase border border-accent py-2 px-4 hover:bg-accent hover:text-foreground transition-all ease-in-out duration-500'
            >
              Ver ahora
            </Link>
          </div>
        </div>
      </div>
    </StickySection>
  );
};

export default HeroSection;
