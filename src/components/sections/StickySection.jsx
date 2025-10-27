'use client';

import React from 'react';

const StickySection = ({ children }) => {
  return (
    <section className='sticky top-0 w-full h-full min-h-screen flex flex-col justify-center items-center'>
      <div className='absolute inset-0'>{children}</div>
    </section>
  );
};

export default StickySection;
