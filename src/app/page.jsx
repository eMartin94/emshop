import FeaturedSection from '@/components/sections/FeaturedSection';
import HeroSection from '@/components/sections/HeroSection';
import NewArrivalsSection from '@/components/sections/NewArrivalsSection';

export default function Home() {
  return (
    <main className='w-full bg-accent text-accent relative'>
      <HeroSection />

      <FeaturedSection
        leftImage='https://res.cloudinary.com/dbrzmfber/image/upload/v1761691151/gafas-cover_xi5fj0.webp'
        rightImage='https://res.cloudinary.com/dbrzmfber/image/upload/v1761691249/gafas-model_bm76gp.webp'
        title='Gafas'
        subtitle='Nueva colección'
        linkPosition='left'
      />

      <FeaturedSection
        leftImage='https://res.cloudinary.com/dbrzmfber/image/upload/v1761691316/reloj-model_gg1zcm.webp'
        rightImage='https://res.cloudinary.com/dbrzmfber/image/upload/v1761692018/reloj-cover_kzb9qh.webp'
        title='Relojes'
        subtitle='Nueva colección'
        linkPosition='right'
      />
      <NewArrivalsSection />
    </main>
  );
}
