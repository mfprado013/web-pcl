import { SiteLayout } from '@/components/Layouts';
import CarouselSlide from '@/components/Pages/Home/Carousel/CarouselSlide';

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
        <div className='max-w-7xl mx-auto'>
          <main>
            <h1>ponto certo</h1>
          </main>
        </div>
        {/* <div className='mx-auto max-w-7xl bg-white'></div> */}
      </SiteLayout>
    </>
  );
}
