import { SiteLayout } from '@/components/Layouts';
import PortifolioAgricola from '@/components/Pages/Portifolio/PortifolioAgricola';
import PortifolioLimpeza from '@/components/Pages/Portifolio/PortifolioLimpeza';
import PortifolioLocação from '@/components/Pages/Portifolio/PortifolioLocação';

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
        <main className='relative max-w-7xl mx-auto my-32'>
          <div className='bg-white'>
            <div className='mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8'>
              <div className='px-10'>
                <h1 className='mt-2 text-sm font-semibold tracking-tight text-gray-900 sm:text-3xl sm:tracking-tight'>
                  Serviços de Locações
                </h1>
              </div>
              <div className='pt-4 px-6'>
                <PortifolioLocação />
              </div>
              <div className='pt-6 px-10'>
                <h1 className='mt-2 text-sm font-semibold tracking-tight text-gray-900 sm:text-3xl'>
                  Serviços de Limpeza em rios
                </h1>
              </div>
              <div className='pt-4 px-6'>
                <PortifolioLimpeza />
              </div>
              <div className='pt-6 px-10'>
                <h1 className='mt-2 text-sm font-semibold tracking-tight text-gray-900 sm:text-3xl'>
                  Serviços Agricolas
                </h1>
              </div>
              <div className='pt-4 px-6'>
                <PortifolioAgricola />
              </div>
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
