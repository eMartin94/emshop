import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconDiscount2,
} from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='w-full text-foreground bg-foreground text-sm'>
      <div className='bg-accent'>
        <div className='w-full  py-14 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-between'>
          <div className='font-bold max-w-sm text-lg'>
            <h3 className='uppercase'>¡Haz match con nuestras novedades!</h3>
            <p className='uppercase'>
              Suscríbete y recibe 15% de descuento en tu primera compra online
            </p>
          </div>

          <div className='relative w-full'>
            <input
              type='email'
              placeholder='EMAIL:'
              className='w-full border-b border-foreground outline-none py-2 pr-10 text-foreground placeholder:text-neutro transition-colors duration-300 '
            />
            <button className='absolute right-0 top-1/2 -translate-y-1/2 text-foreground cursor-pointer py-1 uppercase font-semibold'>
              suscribirse
            </button>
          </div>

          <div className='lg:flex items-center justify-center hidden'>
            <IconDiscount2 size={128} />
          </div>
        </div>
      </div>

      <div className='w-full bg-foreground py-4 px-4 sm:px-8 text-accent'>
        <div className='w-full py-14 px-4 sm:px-8 flex flex-col sm:flex-row items-start justify-between gap-4'>
          <div className='w-auto max-w-xs'>
            <h4 className='text-4xl font-extrabold'>emShop</h4>
            <p className='text-sm text-muted mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              natus?
            </p>
          </div>

          <div className='w-1/2 flex flex-wrap gap-8 sm:gap-16 mt-8 sm:mt-0 justify-start sm:justify-between'>
            <div className='flex flex-col gap-2'>
              <h4>Categorias</h4>
              <ul>
                <li className='text-muted'>
                  <Link href='#'>Nuevo</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Mujeres</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Hombres</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Niños</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Accesorios</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Ofertas</Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-accent'>Servicio a cliente</h4>
              <ul>
                <li className='text-muted'>
                  <Link href='#'>Devoluviones y cambios</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Preguntas frecuentes</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Libro de reclamaciones</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Gift Cards</Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-accent'>Términos y condiciones</h4>
              <ul>
                <li className='text-muted'>
                  <Link href='#'>Condiciones de envío</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Política de privacidad</Link>
                </li>
                <li className='text-muted'>
                  <Link href='#'>Política de pago</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col gap-2 mt-4 sm:mt-0'>
            <ul className='flex gap-4 justify-start'>
              <li>
                <a
                  href='https://www.facebook.com/'
                  className='no-underline cursor-pointer'
                >
                  <IconBrandFacebook size={24} className='text-accent' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  className='no-underline cursor-pointer'
                >
                  <IconBrandInstagram size={24} className='text-accent' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.tiktok.com/'
                  className='no-underline cursor-pointer'
                >
                  <IconBrandTiktok size={24} className='text-accent' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center'>
          <p>© 2025 emShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
