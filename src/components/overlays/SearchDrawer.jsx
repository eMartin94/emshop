'use client';

import { IconSearch, IconX } from '@tabler/icons-react';
import React from 'react';

const SearchDrawer = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 bg-accent h-screen w-full sm:max-w-sm px-4 sm:px-8 py-4 sm:py-8 flex flex-col gap-8 transition-all duration-500 ease-in-out ${
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

      <div className='relative w-full'>
        <input
          type='text'
          placeholder='¿Qué te gustaría llevarte hoy?'
          className='w-full border-b border-foreground outline-none py-2 pr-10 text-foreground placeholder:text-neutro transition-colors duration-300'
        />
        <IconSearch
          size={22}
          stroke={1.5}
          className='absolute right-0 top-1/2 -translate-y-1/2 text-accent cursor-pointer bg-foreground p-1.5 w-8 h-8'
        />
      </div>
    </div>
  );
};

export default SearchDrawer;
