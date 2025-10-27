'use client';

import {
  IconBrandGoogle,
  IconEye,
  IconEyeOff,
  IconX,
} from '@tabler/icons-react';
import React, { useState } from 'react';

const AccountDrawer = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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

      <div className='w-full'>
        <h2 className='text-2xl font-bold text-foreground text-center'>
          Iniciar sesión
        </h2>
        <p className='text-xs text-center mt-2 text-foreground'>
          ¡No te pierdas tus recompensas! Inicia sesión y descúbrelo
        </p>

        <div>
          <form>
            <div className='flex flex-col gap-4 mt-6'>
              <input
                type='email'
                placeholder='Correo electrónico'
                className='w-full border-b border-foreground outline-none py-2 text-foreground placeholder:text-neutro transition-colors duration-300'
              />
              <div className='w-full relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Contraseña'
                  className='w-full border-b border-foreground outline-none py-2 text-foreground placeholder:text-neutro transition-colors duration-300'
                />
                {showPassword ? (
                  <IconEyeOff
                    size={20}
                    stroke={1.5}
                    className='absolute right-0 top-1/2 -translate-y-1/2 text-neutro cursor-pointer'
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <IconEye
                    size={20}
                    stroke={1.5}
                    className='absolute right-0 top-1/2 -translate-y-1/2 text-neutro cursor-pointer'
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <p className='text-xs text-end text-foreground'>
                <a href='#'>¿Olvidaste tu contraseña?</a>
              </p>
            </div>
            <button className='w-full mt-8 border border-foreground p-2 bg-foreground/90 hover:bg-foreground text-accent cursor-pointer'>
              <span className='uppercase text-sm'>Iniciar sesión</span>
            </button>
          </form>
          <p className='text-xs text-center mt-4 text-foreground'>
            ¿Aún no tienes cuenta?{' '}
            <a href='#' className='underline underline-offset-4'>
              Regístrate
            </a>
          </p>

          <p className='text-center mt-8 text-foreground'>o conéctate con:</p>
          <button className='w-full mt-8 border border-foreground p-2 bg-transparent text-foreground cursor-pointer'>
            <IconBrandGoogle size={18} className='inline mr-2' />
            <span className='uppercase text-sm'>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDrawer;
