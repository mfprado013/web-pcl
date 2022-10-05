import { SiteLayout } from '@/components/Layouts';
import PortifolioAgricola from '@/components/Pages/Home/Carousel/PortifolioAgricola';
import PortifolioLimpeza from '@/components/Pages/Home/Carousel/PortifolioLimpeza';
import PortifolioLocação from '@/components/Pages/Home/Carousel/PortifolioLocação';

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Sobre', href: '/about', current: false },
  { name: 'Portifólio', href: '/portifolio', current: true },
  { name: 'Contato', href: '/contact', current: false }
];

export default function Portifolio() {
  return (
    <>
      <SiteLayout title='portifolio' withHeader withFooter navigation={navigation}>
        <main className='relative max-w-7xl mx-auto'>
          <div className='mt-10 px-2'>
            <h1 className='mt-2 text-sm font-semibold tracking-tight text-gray-900 sm:text-3xl'>
              Serviços Agricolas
            </h1>
          </div>
          <div className='mt-10'>
            <PortifolioAgricola />
          </div>
          <div className='mt-10 px-2'>
            <h1 className='mt-2 text-sm font-semibold tracking-tight text-gray-900 sm:text-3xl'>
              Serviços de Locações
            </h1>
          </div>
          <div className='mt-10'>
            <PortifolioLocação />
          </div>
          <div className='mt-10 px-2'>
            <h1 className='mt-2 text-sm font-semibold tracking-tight text-gray-900 sm:text-3xl'>
              Serviços de Limpeza
            </h1>
          </div>
          <div className='mt-10'>
            <PortifolioLimpeza />
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
