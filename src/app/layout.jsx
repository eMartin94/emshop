import '@/styles/globals.css';
import '@/styles/cabinet-grotesk.css';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'emShop | Moda Urbana y Accesorios de Temporada',
  description:
    'Explora la nueva colección de moda urbana en emShop. Polos, gorras, pulseras, tomatodos y llaveros inspirados en tu estilo. Productos de temporada, envíos rápidos y pagos seguros.',
  authors: [{ name: 'eMartinDev' }],
  keywords: [
    'emshop',
    'moda urbana',
    'accesorios',
    'ropa de temporada',
    'streetwear',
    'tienda online',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`font-cabinet-grotesk-variable antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
