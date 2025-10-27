'use client';
import { categorias } from '@/data';
import React, { useState } from 'react';

const CategoriesBar = ({ isScrolled }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <div
      className='relative w-full hidden sm:block'
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <ul
        className={`flex gap-16 w-full max-w-7xl mx-auto justify-center transition-all ease-out duration-500  ${
          isScrolled ? 'pt-4 text-accent' : 'pt-14 text-accent'
        }`}
      >
        <li className='uppercase font-bold tracking-wider cursor-pointer underline-center'>
          nuevo
        </li>

        <li
          className={`uppercase font-bold tracking-wider cursor-pointer underline-center ${
            hoveredMenu === 'mujeres' ? 'active' : ''
          }`}
          onMouseEnter={() => setHoveredMenu('mujeres')}
        >
          mujeres
        </li>

        <li
          className={`uppercase font-bold tracking-wider cursor-pointer underline-center ${
            hoveredMenu === 'hombres' ? 'active' : ''
          }`}
          onMouseEnter={() => setHoveredMenu('hombres')}
        >
          hombres
        </li>

        <li
          className={`uppercase font-bold tracking-wider cursor-pointer underline-center ${
            hoveredMenu === 'niños' ? 'active' : ''
          }`}
          onMouseEnter={() => setHoveredMenu('niños')}
        >
          niños
        </li>

        <li className='uppercase font-bold tracking-wider cursor-pointer underline-center'>
          accesorios
        </li>
      </ul>

      {hoveredMenu && (
        <div
          className='absolute left-0 top-full w-screen bg-foreground shadow py-8 px-16 animate-fadeIn z-40'
          onMouseEnter={() => setHoveredMenu(hoveredMenu)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className='grid grid-cols-5 gap-10 max-w-7xl mx-auto'>
            {Object.entries(categorias[hoveredMenu]).map(
              ([categoria, subcats]) => (
                <div key={categoria}>
                  <h3 className='font-medium text-lg mb-2 capitalize text-accent'>
                    {categoria}
                  </h3>
                  <ul className='flex flex-col gap-1'>
                    {subcats.map((sub) => (
                      <li
                        key={sub}
                        className='text-muted capitalize hover:text-accent cursor-pointer hover:underline underline-offset-4 decoration-accent'
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesBar;
