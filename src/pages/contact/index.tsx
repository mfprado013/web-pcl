import { SiteLayout } from '@/components/Layouts';

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Sobre', href: '/about', current: false },
  { name: 'Portifólio', href: '/portifolio', current: false },
  { name: 'Contato', href: '/contact', current: true }
];

export default function Contact() {
  return (
    <>
      <SiteLayout title='entre em contato' withHeader withFooter navigation={navigation}>
        <main className='relative max-w-7xl mx-auto'>
          <div>
            <div className='max-w-7xl mx-auto my-32'>
              <div className='bg-cinza-100 w-full h-full rounded-sm px-4 py-6'>
                <div className='mb-6'>
                  <h1 className='font-bold text-cinza-700 uppercase'>
                    Entre em contato consco
                  </h1>
                  <span className='text-cinza-400 '>
                    envie um e-mail e faça já seu orçamento ou tire sua duvida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
