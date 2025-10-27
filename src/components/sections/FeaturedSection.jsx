'use client';

import StickySection from '@/components/sections/StickySection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedSection = ({
  leftImage,
  rightImage,
  title,
  subtitle,
  linkPosition = 'right',
}) => {
  const hideLeft = linkPosition === 'right';
  const hideRight = linkPosition === 'left';
  return (
    <StickySection>
      <div className='flex flex-col items-center justify-center h-full bg-foreground text-white relative'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-1'>
          {/* Left Image */}
          <div className='relative'>
            <Image
              src={leftImage}
              alt={`${title} - Imagen Izquierda`}
              width={1920}
              height={1080}
              className={`w-full h-screen object-cover ${
                hideLeft ? 'hidden sm:block' : ''
              }`}
            />
            {linkPosition === 'left' && (
              <>
                <div className='absolute top-24 sm:top-32 left-8 sm:left-16'>
                  <h4 className='uppercase text-3xl sm:text-4xl text-foreground font-extrabold tracking-wider'>
                    {title}
                  </h4>
                  <p className='text-foreground -mt-2 ml-8'>{subtitle}</p>
                </div>
                <div className='absolute bottom-1/5 right-14'>
                  <Link
                    href='#'
                    className='text-foreground underline underline-offset-4 text-base'
                  >
                    Ver ahora
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Right Image */}
          <div className='relative'>
            <Image
              src={rightImage}
              alt={`${title} - Imagen Derecha`}
              width={1920}
              height={1080}
              className={`w-full h-screen object-cover ${
                hideRight ? 'hidden sm:block' : ''
              }`}
            />
            {linkPosition === 'right' && (
              <>
                <div className='absolute top-24 sm:top-32 right-8 sm:right-16'>
                  <h4 className='uppercase text-3xl sm:text-4xl text-foreground font-extrabold tracking-wider'>
                    {title}
                  </h4>
                  <p className='text-foreground -mt-2 ml-8'>{subtitle}</p>
                </div>
                <div className='absolute bottom-1/5 left-14'>
                  <Link
                    href='#'
                    className='text-foreground underline underline-offset-4 text-base'
                  >
                    Ver ahora
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </StickySection>
  );
};

export default FeaturedSection;
