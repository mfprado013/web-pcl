import { SiteLayout } from '@/components/Layouts';
import CarouselSlide from '@/components/Pages/Home/Carousel/CarouselSlide';

import malePicture from '@/assets/images/male-worker.png';
import Link from 'next/link';
import CompaniesSlides from '@/components/Pages/Home/Carousel/CompaniesSlides';
import SlideVideos from '@/components/Pages/Home/SlideVideos/SlideVide';

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
            <div className='absolute z-10 mt-52 md:ml-[100px] lg:ml-[380px]'>
              <div className='flex flex-col items-center gap-y-4'>
                <h2 className='text-gray-50 text-2xl md:text-6xl uppercase font-bold'>
                  ponto certo
                </h2>
                <span className='text-gray-50 text-lg sm:w-30 md:w-[600px] text-center'>
                  <span className='font-semibold'>
                    {' '}
                    A locação de maquinas é a melhor opção para a preservação do capital
                    da empresa.
                  </span>
                  A contratação destes serviços contribui ainda para que a empresa esteja
                  sempre com os produtos melhores e mais modernos do mercado sem precisar
                  imobilizar seu capital e ter o desgaste com a manutenção ou reparos
                  quando necessários. Além disso, pode ser contratado apenas pelo período
                  de uso do equipamento, sem ter a obrigatoriedade de destinar grandes
                  espaços para o armazenamento.
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
            <div className='pl-10 pt-20 flex flex-col'>
              <h2 className='break-words font-semibold text-2xl text-cinza-600'>
                A Ponto Certo, empresa constituída em julho de 2014 na cidade de Guariba,
                estado de São Paulo. Tem como sua principal atividade os{' '}
                <span className='font-bold uppercase text-gray-900'>
                  serviços de Alocações
                </span>{' '}
                de Guindastes , Caminhões Muck, Limpesas de Rios e Serviços Agricolas.
              </h2>
              <div className='mt-6 mr-5 sm:mr-0 z-40'>
                <Link href='/portifolio'>
                  <a className='bg-gray-600 hover:bg-gray-500 text-gray-50 uppercase font-semibold text-center w-full sm:w-52 px-5 py-3 flex justify-center'>
                    saiba mais
                  </a>
                </Link>
              </div>
            </div>
            <img src={malePicture.src} alt='about-bussiness' className='hidden md:flex' />
          </div>
        </div>
        {/*  */}
        <div className='bg-cinza-800 w-full h-full mb-10'>
          <div className='max-w-7xl mx-auto  flex justify-center sm:justify-between gap-x-5'>
            <div className='w-2/5 py-7 hidden sm:flex'>
              <span className='break-words font-semibold text-4xl text-cinza-50 pt-10'>
                Bem Vindo! Aqui está um dos nossos principais serviços hoje, limpeza do
                rio madeira em Porto Velho Rondonia, veja nossos esquipamento e equipe
                atuando na limpeza
              </span>
            </div>
            <div className='py-7 max-w-2xl mx-4 sm:mx-0'>
              <SlideVideos />
            </div>
          </div>
        </div>
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
