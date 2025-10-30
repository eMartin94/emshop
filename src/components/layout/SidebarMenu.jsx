'use client';

import { IconChevronDown, IconChevronUp, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
import Link from 'next/link';
import { categorias } from '@/data/categoriesMenu';

const SidebarMenu = ({ open, onClose }) => {
  const [openCategoria, setOpenCategoria] = useState(null);
  const [openSubcategoria, setOpenSubcategoria] = useState(null);

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
        {Object.entries(categorias).map(([cat, data]) => (
          <li key={cat}>
            <button
              className='flex justify-between items-center w-full text-left uppercase font-bold text-gray-800 text-lg cursor-pointer'
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
              <div className='mt-2 pl-3 border-l border-muted'>
                {Object.entries(data.items).map(([itemName, itemData]) => (
                  <div key={itemName} className='mb-2'>
                    <div className='flex justify-between items-center'>
                      <Link
                        href={itemData.path}
                        className='font-semibold text-base text-foreground capitalize mb-1 hover:underline'
                      >
                        {itemName}
                      </Link>

                      {itemData.subcategorias && (
                        <button
                          onClick={() =>
                            setOpenSubcategoria(
                              openSubcategoria === itemName ? null : itemName
                            )
                          }
                        >
                          {openSubcategoria === itemName ? (
                            <IconChevronUp
                              size={14}
                              className='text-foreground'
                            />
                          ) : (
                            <IconChevronDown
                              size={14}
                              className='text-foreground'
                            />
                          )}
                        </button>
                      )}
                    </div>

                    {itemData.subcategorias &&
                      openSubcategoria === itemName && (
                        <ul className='flex flex-col gap-1 ml-3 mt-1'>
                          {itemData.subcategorias.map((sub) => (
                            <li key={sub.nombre}>
                              <Link
                                href={sub.path}
                                className='text-sm capitalize text-neutro hover:text-foreground hover:underline cursor-pointer'
                              >
                                {sub.nombre}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
