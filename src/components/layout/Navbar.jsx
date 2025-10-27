'use client';

import React from 'react';
import {
  IconMenu3,
  IconSearch,
  IconShoppingBag,
  IconUser,
} from '@tabler/icons-react';

export const Navbar = ({
  isScrolled,
  onOpenMenu,
  onOpenSearchBar,
  onOpenCart,
  onOpenAccount,
}) => {
  return (
    <nav
      className={`flex h-full justify-between items-center w-full mx-auto px-4 sm:px-8 relative ${
        isScrolled ? 'text-accent' : 'text-accent'
      }`}
    >
      <div className='flex items-center gap-2 sm:gap-4'>
        <button onClick={onOpenMenu}>
          <IconMenu3 size={24} stroke={1.5} className='cursor-pointer' />
        </button>
        <IconSearch
          size={24}
          stroke={1.5}
          className='cursor-pointer block sm:hidden'
          onClick={onOpenSearchBar}
        />
      </div>

      <div className='absolute -top-2 sm:-top-6 left-1/2 transform -translate-x-1/2'>
        <h1
          className={`font-black text-center transition-all ease-out duration-500 ${
            isScrolled ? 'text-4xl sm:text-5xl' : 'text-5xl sm:text-8xl '
          }`}
        >
          emShop
        </h1>
      </div>

      <div className='flex sm:flex-row items-center gap-2 sm:gap-4'>
        <IconSearch
          size={24}
          stroke={1.5}
          className='cursor-pointer hidden sm:block'
          onClick={onOpenSearchBar}
        />
        <IconShoppingBag
          size={24}
          stroke={1.5}
          className='cursor-pointer'
          onClick={onOpenCart}
        />
        <IconUser
          size={24}
          stroke={1.5}
          className='cursor-pointer'
          onClick={onOpenAccount}
        />
      </div>
    </nav>
  );
};
