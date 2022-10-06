import { SiteLayout } from '@/components/Layouts';
import Image from 'next/image';
import Pc01 from '@/assets/images/about/pt79.jpeg';
import Pc02 from '@/assets/images/about/pt25.jpeg';
import Pc03 from '@/assets/images/about/pt3.jpeg';
import Logo from '@/assets/images/logo.svg';

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Sobre', href: '/about', current: true },
  { name: 'Portifólio', href: '/portifolio', current: false },
  { name: 'Contato', href: '/contact', current: false }
];

export default function About() {
  return (
    <>
      <SiteLayout title='sobre nós' withHeader withFooter navigation={navigation}>
        <main className='relative max-w-7xl mx-auto'>
          <div>
            <div className='bg-white'>
              <div className='mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2'>
                  <div className='-mt-96'>
                    <div className='flex relative justify-start px-60 py-20'>
                      <Image src={Logo.src} width={80} height={80} />
                    </div>
                    <div className='border-b border-gray-200 pb-10'>
                      <h1 className='mt-2 break-words font-semibold text-4xl text-cinza-600'>
                        Sobre nós
                      </h1>
                      <div>
                        <h2 className='break-words font-normal text-gray-400'>
                          Somos uma empresa prestadora de serviços, onde alocamos maquinas
                          para serviços aquaticos, maquinas para serviços de trabalho em
                          alturas, maquinas para serviços agricolas
                        </h2>
                      </div>
                    </div>
                    <dl className='mt-10 space-y-10'>
                      {features.map((feature) => (
                        <div key={feature.name}>
                          <dt className='break-words font-semibold text-4xl text-cinza-600'>
                            {feature.name}
                          </dt>
                          <dd className='mt-3 break-words font-normal text-gray-400'>
                            {feature.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div>
                    <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-xl'>
                      <Image src={Pc01.src} width={600} height={700} />
                    </div>
                    <div className='mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8'>
                      <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-xl'>
                        <Image src={Pc02.src} width={600} height={700} />
                      </div>
                      <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-xl'>
                        <Image src={Pc03.src} width={600} height={700} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}

const features = [
  {
    name: 'Serviço de Locações',
    description:
      'Alocamos guindadeste, caminhão munck, para todos os serviços que o cliente precisar'
  },
  {
    name: 'Serviço de Limpeza',
    description:
      'Alocamos bancos, retroescavadeiras, guindadeste, para serviços de limpezas em rios'
  },
  {
    name: 'Serviços Agricolas',
    description: 'serviços agricolas'
  }
];
