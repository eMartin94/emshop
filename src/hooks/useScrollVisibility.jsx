'use client';

import React, { useEffect, useState } from 'react';

const useScrollVisibility = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return isScrolled;
};

export default useScrollVisibility;
