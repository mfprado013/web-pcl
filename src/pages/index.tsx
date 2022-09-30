import { SiteLayout } from '@/components/Layouts';
import CarouselSlide from '@/components/Pages/Home/Carousel/CarouselSlide';

import malePicture from '@/assets/images/male-worker.png';
import Link from 'next/link';
import CompaniesSlides from '@/components/Pages/Home/Carousel/CompaniesSlides';

const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Sobre', href: '/about', current: false },
  { name: 'Portifólio', href: '/portifolio', current: false },
  { name: 'Contato', href: '/contact', current: false }
];

export default function Index() {
  return (
    <>
      <SiteLayout title='home' withFooter withHeader navigation={navigation}>
        <header>
          <div className='max-w-7xl mx-auto '>
            <div className='absolute z-10 mt-52 md:ml-[100px] lg:ml-[400px]'>
              <div className='flex flex-col items-center gap-y-4'>
                <h2 className='text-gray-50 text-2xl md:text-6xl uppercase font-bold'>
                  ponto certo
                </h2>
                <span className='text-gray-50 text-lg sm:w-30 md:w-[500px] text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                  odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
                  quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris.
                </span>
              </div>
            </div>
          </div>
          {/* carousel */}
          <div className='z-0 relative h-[720px] w-full overflow-hidden object-cover opacity-90'>
            <CarouselSlide />
          </div>
          {/* <img
            className='z-0 relative h-[720px] w-full object-cover opacity-90'
            src={BgTeste.src}
            alt=''
          /> */}
        </header>
        {/* about */}
        <div className='max-w-7xl mx-auto mt-10'>
          <div className='flex justify-between mb-10'>
            <div className='pl-10 pt-10 flex flex-col'>
              <h2 className='break-words font-semibold text-4xl text-cinza-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante{' '}
                <span className='text-blue-600'>dapibus diam.</span> Sed nisi. Nulla quis
                sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
              </h2>
              <div className='mt-6 mr-5 sm:mr-0'>
                <Link href='/portifolio'>
                  <a className='bg-blue-600 hover:bg-blue-500 text-gray-50 uppercase font-semibold text-center w-full sm:w-52 px-5 py-3 flex justify-center'>
                    saiba mais
                  </a>
                </Link>
              </div>
            </div>
            <img src={malePicture.src} alt='about-bussiness' className='hidden md:flex' />
          </div>
        </div>
        {/*  */}
        <div className='bg-cinza-800 w-full h-52 mb-10'></div>
        {/* companies slides */}
        <div className=' max-w-xs sm:max-w-lg md:max-w-3xl  lg:max-w-5xl xl:max-w-7xl mx-auto mt-10'>
          <div className=''>
            <CompaniesSlides />
          </div>
        </div>
        {/* <div className='mx-auto max-w-7xl bg-white'></div> */}
      </SiteLayout>
    </>
  );
}
