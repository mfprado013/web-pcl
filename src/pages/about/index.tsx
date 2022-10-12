import { SiteLayout } from '@/components/Layouts';
import Image from 'next/image';
import Pc01 from '@/assets/images/about/pt79.jpeg';
import Pc02 from '@/assets/images/about/pt49.jpeg';
import Pc03 from '@/assets/images/about/pt21.jpeg';
import Pc04 from '@/assets/images/about/pt3.jpeg';
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
        <main className='relative max-w-7xl mx-auto my-32'>
          <div>
            <div className='bg-white'>
              <div className='mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2'>
                  <div>
                    <div className='border-b border-gray-200 pb-6 -mt-20'>
                      <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
                        Sobre nós
                      </h2>
                      <div>
                        <h2 className='mt-2 text-base text-gray-500'>
                          Somos uma empresa prestadora de serviços, onde alocamos maquinas
                          para serviços de limpeza de rios, maquinas para serviços de
                          trabalho em alturas, maquinas para serviços agricolas, atuando
                          no mercado desde 2014, mais com experiença desde 1997, garantia
                          de serviço da melhor qualidade
                        </h2>
                      </div>
                    </div>
                    <dl className='mt-6 space-y-10'>
                      {features.map((feature) => (
                        <div key={feature.name}>
                          <dt className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
                            {feature.name}
                          </dt>
                          <dd className='mt-3 text-base text-gray-500'>
                            {feature.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div>
                    <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-xl'>
                      <Image src={Pc01.src} width={800} height={600} />
                    </div>
                    <div className='mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8'>
                      <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-xl'>
                        <Image src={Pc02.src} width={800} height={500} />
                        <Image src={Pc03.src} width={800} height={600} />
                      </div>
                      <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-xl'>
                        <Image src={Pc04.src} width={500} height={700} />
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
      'Locação de Guindastes e Caminhões Munck em Guariba e diversas outras localidades do país, a Ponto Certo atua em todo o território nacional com soluções versáteis no ramo de transportes, içamento e remoção de cargas pesadas e frágeis. O objetivo é sempre garantir a segurança e satisfação do cliente. Na Ponto Certo  você encontra Caminhão munck e guindastes para locação em todo Brasil'
  },
  {
    name: 'Serviço de Limpeza',
    description:
      'Alocamos bancos, retroescavadeiras, guindadeste, para serviços de limpezas em rios, a Ponto Certo vem nessa area forte, pois estamos fazendo a limpeza do rio a mais de 10 anos e ainda continuamos a atuar nessa area e a cada ano estamos aprimorando equipamentos para que nosso serviços n tenha perga de qualidade'
  },
  {
    name: 'Serviços Agricolas',
    description:
      'Alocamos os serviços agricolas para todo o brasil, entramos com qualidade nessa area e estamos a cada ano melhorando os equipamentos, sempre preorizando segurança e qualidade de serviço a Ponto Certo vem se destacando muito mais '
  }
];
