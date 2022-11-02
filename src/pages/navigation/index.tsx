import { SiteLayout } from '@/components/Layouts';
import GridImages from '@/components/Pages/Navigation/GridImages';
import Pdf from '@/components/Pages/Navigation/Pdf';
import { DocumentArrowDownIcon, DocumentIcon } from '@heroicons/react/24/outline';

import File01 from '@/assets/images/navigation/pt11.jpeg';
import File02 from '@/assets/images/navigation/pt12.jpeg';
import File03 from '@/assets/images/navigation/pt13.jpeg';
import File04 from '@/assets/images/navigation/pt14.jpeg';
import File05 from '@/assets/images/navigation/pt16.jpeg';
import File06 from '@/assets/images/navigation/pt17.jpeg';
import File07 from '@/assets/images/navigation/pt19.jpeg';
import File08 from '@/assets/images/navigation/pt20.jpeg';
import File09 from '@/assets/images/navigation/pt22.jpeg';
import File10 from '@/assets/images/navigation/pt23.jpeg';
import File11 from '@/assets/images/navigation/pt25.jpeg';
import File12 from '@/assets/images/navigation/pt26.jpeg';
import File13 from '@/assets/images/navigation/pt27.jpeg';
import File14 from '@/assets/images/navigation/pt28.jpeg';
import File15 from '@/assets/images/navigation/pt29.jpeg';
import File16 from '@/assets/images/navigation/pt32.jpeg';
import File17 from '@/assets/images/navigation/pt38.jpeg';
import File18 from '@/assets/images/navigation/pt41.jpeg';
import File19 from '@/assets/images/navigation/pt44.jpeg';
import File20 from '@/assets/images/navigation/pt48.jpeg';
import File21 from '@/assets/images/navigation/pt55.jpeg';

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
  },
  {
    id: 9,
    source: File09.src
  },
  {
    id: 10,
    source: File10.src
  },
  {
    id: 11,
    source: File11.src
  },
  {
    id: 12,
    source: File12.src
  },
  {
    id: 13,
    source: File13.src
  },
  {
    id: 14,
    source: File14.src
  },
  {
    id: 15,
    source: File15.src
  },
  {
    id: 16,
    source: File16.src
  },
  {
    id: 17,
    source: File17.src
  },
  {
    id: 18,
    source: File18.src
  },
  {
    id: 19,
    source: File19.src
  },
  {
    id: 20,
    source: File20.src
  },
  {
    id: 21,
    source: File21.src
  }
];

const items = [
  {
    title: 'Download do PDF de Resumo',
    description: 'faça o download do pdf de resumo, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-blue-500',
    file: '/navigation/resumo.pdf',
    nameFile: 'resumo.pdf'
  },
  {
    title: 'Download do PDF de Navegação e Manutenção',
    description: 'faça o download do pdf de navegação e manutenção, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-gray-500',
    file: '/navigation/navegação-manutenção.pdf',
    nameFile: 'navegação-manutenção.pdf'
  }
];

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Navegação|Manutenção', href: '/navigation', current: true },
  { name: 'Içamento|Contrução', href: '/construction', current: false },
  { name: 'Plantio|Lavoura', href: '/planting', current: false },
  { name: 'Contato', href: '/contact', current: false }
];

export default function Navigation() {
  return (
    <>
      <SiteLayout title='sobre nós' withHeader withFooter navigation={navigation}>
        <main className='relative max-w-7xl mx-auto my-32'>
          <div>
            <div className='bg-white mx-auto rounded-md'>
              <div className='px-8 py-8'>
                <div className='mb-5'>
                  <h3 className='text-2xl font-bold text-gray-700'>
                    Navegação e Manutenção
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
