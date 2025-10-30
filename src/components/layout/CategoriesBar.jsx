'use client';

import { categorias } from '@/data/categoriesMenu';
import Link from 'next/link';
import React, { useState } from 'react';

const CategoriesBar = ({ isScrolled }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const categoryOrder = ['nuevo', 'mujeres', 'hombres', 'niños', 'regalos'];

  return (
    <div
      className='relative w-full hidden sm:block'
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <ul
        className={`flex gap-16 w-full max-w-7xl mx-auto justify-center transition-all ease-out duration-500 ${
          isScrolled ? 'pt-4 text-accent' : 'pt-14 text-accent'
        }`}
      >
        {categoryOrder.map((key) => (
          <li
            key={key}
            className={`uppercase font-bold tracking-wider cursor-pointer underline-center ${
              hoveredMenu === key ? 'active' : ''
            }`}
            onMouseEnter={() => setHoveredMenu(key)}
          >
            <Link href={categorias[key].path}>{key}</Link>
          </li>
        ))}
      </ul>

      {hoveredMenu && categorias[hoveredMenu].items && (
        <div
          className={`absolute left-0 top-full w-screen bg-foreground shadow py-8 px-16 animate-fadeIn z-40`}
          onMouseEnter={() => setHoveredMenu(hoveredMenu)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div
            className={`max-w-7xl mx-auto
      ${
        hoveredMenu === 'nuevo' || hoveredMenu === 'regalos'
          ? 'grid grid-cols-1 gap-0'
          : 'grid grid-cols-5 gap-2'
      }`}
          >
            {Object.entries(categorias[hoveredMenu].items).map(
              ([categoria, datos]) => (
                <div key={categoria}>
                  <h3 className='font-medium text-lg mb-2 capitalize text-accent cursor-pointer hover:underline underline-offset-4 decoration-accent'>
                    <Link href={datos.path}>{categoria}</Link>
                  </h3>
                  {datos.subcategorias && (
                    <ul className='flex flex-col gap-1'>
                      {datos.subcategorias.map((sub) => (
                        <li
                          key={sub.nombre}
                          className='text-muted capitalize hover:text-accent cursor-pointer hover:underline underline-offset-4 decoration-accent'
                        >
                          <Link href={sub.path}>{sub.nombre}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
