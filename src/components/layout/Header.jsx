'use client';
import useScrollVisibility from '@/hooks/useScrollVisibility';
import React, { useState } from 'react';
import { Navbar } from './Navbar';
import CategoriesBar from './CategoriesBar';
import SidebarMenu from './SidebarMenu';
import SearchDrawer from '../overlays/SearchDrawer';
import CartDrawer from '../overlays/CartDrawer';
import AccountDrawer from '../overlays/AccountDrawer';

const Header = () => {
  const isScrolled = useScrollVisibility();

  const [openPanel, setOpenPanel] = useState(null);

  const handleOpenPanel = (panel) => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full pt-8 sm:pt-14 sm:pb-2 z-50 ${
        isScrolled
          ? 'pb-4 bg-foreground shadow'
          : 'pb-8 bg-transparent shadow-none'
      } transition-all ease-out duration-500`}
    >
      <Navbar
        onOpenMenu={() => handleOpenPanel('menu')}
        onOpenSearchBar={() => handleOpenPanel('search')}
        onOpenCart={() => handleOpenPanel('cart')}
        onOpenAccount={() => handleOpenPanel('account')}
        isScrolled={isScrolled}
      />

      <CategoriesBar isScrolled={isScrolled} />

      <SidebarMenu
        open={openPanel === 'menu'}
        onClose={() => setOpenPanel(null)}
      />
      <SearchDrawer
        open={openPanel === 'search'}
        onClose={() => setOpenPanel(null)}
      />
      <CartDrawer
        open={openPanel === 'cart'}
        onClose={() => setOpenPanel(null)}
      />
      <AccountDrawer
        open={openPanel === 'account'}
        onClose={() => setOpenPanel(null)}
      />
    </header>
  );
};

export default Header;
