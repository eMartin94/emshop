'use client';

import { categorias } from '@/data';
import { IconChevronDown, IconChevronUp, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';

const SidebarMenu = ({ open, onClose }) => {
  const [openCategoria, setOpenCategoria] = useState(null);

  return (
    <div
      className={`fixed top-0 left-0 bg-accent w-full max-w-xs px-4 sm:px-8 py-12 sm:py-14 flex flex-col gap-8 items-start h-full min-h-svh transition-all ease-in-out duration-300 z-50 overflow-auto
      ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
  `}
    >
      <button onClick={onClose}>
        <IconX
          size={32}
          stroke={1.5}
          className='cursor-pointer text-foreground'
        />
      </button>

      <ul className='flex flex-col gap-8 w-full'>
        {['Inicio', 'Ofertas', 'Nosotros', 'Contacto'].map((item) => (
          <li
            key={item}
            className='cursor-pointer text-xl uppercase font-bold tracking-widest text-gray-800'
          >
            <span className='underline-center'>{item}</span>
          </li>
        ))}
      </ul>

      <hr className='w-full border-foreground my-4 sm:hidden' />

      <ul className='flex flex-col gap-4 w-full sm:hidden'>
        {Object.keys(categorias).map((cat) => (
          <li key={cat}>
            <button
              className='flex justify-between items-center w-full text-left uppercase font-bold text-gray-800 text-lg'
              onClick={() =>
                setOpenCategoria(openCategoria === cat ? null : cat)
              }
            >
              {cat}
              {openCategoria === cat ? (
                <IconChevronUp size={18} />
              ) : (
                <IconChevronDown size={18} />
              )}
            </button>

            {openCategoria === cat && (
              <div className='mt-2 pl-3 border-l border-gray-300'>
                {Object.entries(categorias[cat]).map(([categoria, subcats]) => (
                  <div key={categoria} className='mb-2'>
                    <h4 className='font-semibold text-base capitalize mb-1'>
                      {categoria}
                    </h4>
                    <ul className='flex flex-col gap-1'>
                      {subcats.map((sub) => (
                        <li
                          key={sub}
                          className='text-sm capitalize text-gray-600 hover:text-foreground cursor-pointer'
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
