import { SiteLayout } from '@/components/Layouts';
import GridImages from '@/components/Pages/Contruction/GridImages';
import Pdf from '@/components/Pages/Contruction/Pdf';

import File01 from '@/assets/images/contruction/pt1.jpeg';
import File02 from '@/assets/images/contruction/pt2.jpeg';
import File03 from '@/assets/images/contruction/pt3.jpeg';
import File04 from '@/assets/images/contruction/pt6.jpeg';
import File05 from '@/assets/images/contruction/pt7.jpeg';
import File06 from '@/assets/images/contruction/pt8.jpeg';
import File07 from '@/assets/images/contruction/pt9.jpeg';
import File08 from '@/assets/images/contruction/pt10.jpeg';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const files = [
  {
    id: 1,
    source: File01.src
  },
  {
    id: 2,
    source: File02.src
  },
  {
    id: 3,
    source: File03.src
  },
  {
    id: 4,
    source: File04.src
  },
  {
    id: 5,
    source: File05.src
  },
  {
    id: 6,
    source: File06.src
  },
  {
    id: 7,
    source: File07.src
  },
  {
    id: 8,
    source: File08.src
  }
];

const items = [
  {
    title: 'Download do PDF de Resumo',
    description: 'faça o download do pdf de resumo, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-blue-500',
    file: '/construction/resumo.pdf',
    nameFile: 'resumo.pdf'
  },
  {
    title: 'Download do PDF de Navegação e Manutenção',
    description: 'faça o download do pdf de navegação e manutenção, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-gray-500',
    file: '/construction/icamento-construção.pdf',
    nameFile: 'icamento-construção.pdf'
  }
];

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Navegação|Manutenção', href: '/navigation', current: false },
  { name: 'Içamento|Construção', href: '/construction', current: true },
  { name: 'Plantio|Lavoura', href: '/planting', current: false },
  { name: 'Contato', href: '/contact', current: false }
];

export default function Construction() {
  return (
    <>
      <SiteLayout title='sobre nós' withHeader withFooter navigation={navigation}>
        <main className='relative max-w-7xl mx-auto my-32'>
          <div>
            <div className='bg-white mx-auto rounded-md'>
              <div className='px-8 py-8'>
                <div className='mb-5'>
                  <h3 className='text-2xl font-bold text-gray-700'>
                    Içamento e Construção
                  </h3>
                </div>
                <div className='mb-10'>
                  <GridImages files={files} />
                </div>
                <div>
                  <Pdf items={items} />
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
      'Alocamos barcos, escavadeira Hidráulica, guindadeste, para serviços de limpezas em rios, a Ponto Certo vem nessa area forte, pois estamos fazendo a limpeza do rio a mais de 10 anos e ainda continuamos a atuar nessa area e a cada ano estamos aprimorando equipamentos para que nosso serviços n tenha perga de qualidade'
  },
  {
    name: 'Serviços Agricolas',
    description:
      'Alocamos os serviços agricolas para todo o brasil, entramos com qualidade nessa area e estamos a cada ano melhorando os equipamentos, sempre preorizando segurança e qualidade de serviço a Ponto Certo vem se destacando muito mais '
  }
];
