import { SiteLayout } from '@/components/Layouts';
import { files, items } from './files';
import GridImages from '@/components/Pages/Navigation/GridImages';
import Pdf from '@/components/Pages/Navigation/Pdf';

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
