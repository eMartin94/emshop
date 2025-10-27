'use client';

import { IconTrash, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

const CartDrawer = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 bg-accent h-screen w-full sm:max-w-sm px-4 sm:px-8 py-4 sm:py-8 flex flex-col gap-8 transition-all duration-500 ease-in-out overflow-auto ${
        open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } z-50`}
    >
      <button className='w-full flex justify-end'>
        <IconX
          size={32}
          stroke={1.5}
          className='cursor-pointer text-foreground'
          onClick={onClose}
        />
      </button>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold text-foreground'>Mi pedido</h2>

        {/*  Sin productos */}
        <p className='text-neutro text-center mt-8'>
          ¡Aún no tienes productos añadidos!
        </p>

        {/* Con productos */}
        <div className='flex flex-col gap-2'>
          <div className='w-full flex justify-between gap-2'>
            <div>
              <span>Subtotal: </span> <strong>S/ 379</strong>
            </div>
            <div>
              <span className='text-sm'>2 productos</span>
            </div>
          </div>

          <hr />

          <div className='flex gap-2'>
            <div className='w-14 h-20 bg-white overflow-hidden flex items-center justify-center'>
              <Image
                src='https://images.unsplash.com/photo-1548778943-5bbeeb1ba6c1?ixlib=rb-4.1.0'
                alt='Producto 1'
                width={60}
                height={80}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full relative text-foreground'>
              <h3 className='font-medium'>
                <a href='#'>Nombre del producto 1</a>
              </h3>
              <p className='text-sm'>S/ 199</p>
              <p className='text-sm'>Cantidad: 1</p>
              <IconTrash
                size={20}
                stroke={1.5}
                className='absolute right-0 bottom-4 cursor-pointer'
              />
            </div>
          </div>
          <hr className='border-foreground/10' />

          <div className='w-full flex flex-col gap-4 mt-8'>
            <button className='w-full border border-foreground p-2 bg-transparent text-foreground cursor-pointer'>
              <span className='uppercase text-sm'>Ir al carrito</span>
            </button>
            <button className='w-full border border-foreground p-2 bg-foreground/90 hover:bg-foreground text-accent cursor-pointer'>
              <span className='uppercase text-sm'>Seguir comprando</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
