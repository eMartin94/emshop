import FeaturedSection from '@/components/sections/FeaturedSection';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className='w-full bg-accent text-accent relative'>
      <HeroSection />

      <FeaturedSection
        leftImage='https://images.unsplash.com/photo-1728609002332-99b575a42a5c?ixlib=rb-4.1.0'
        rightImage='https://images.unsplash.com/photo-1745365199049-dd78db8b522e?ixlib=rb-4.1.0'
        title='Gafas'
        subtitle='Nueva colección'
        linkPosition='left'
      />

      <FeaturedSection
        leftImage='https://images.unsplash.com/photo-1653651461602-97dde5087f58?ixlib=rb-4.1.0'
        rightImage='https://images.unsplash.com/photo-1657159810575-95dcfe021c5f?ixlib=rb-4.1.0'
        title='Relojes'
        subtitle='Nueva colección'
        linkPosition='right'
      />
    </main>
  );
}
