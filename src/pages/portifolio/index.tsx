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
        <main className='relative max-w-7xl mx-auto my-32 '>
          <div className='bg-white -mt-14'>
            <div className='max-w-7xl mx-auto px-10 py-5'>
              <h1 className='mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl sm:tracking-tight'>
                Serviços de Locações
              </h1>
              <div className='pt-4 '>
                <PortifolioLocação />
              </div>
              <div className='pt-6 '>
                <h1 className='mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl'>
                  Serviços de Limpeza em rios
                </h1>
              </div>
              <div className='pt-4 '>
                <PortifolioLimpeza />
              </div>
              <div className='pt-6 '>
                <h1 className='mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl'>
                  Serviços Agricolas
                </h1>
              </div>
              <div className='pt-4 '>
                <PortifolioAgricola />
              </div>
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
