import { SiteLayout } from '@/components/Layouts';
import ContactForm from '@/components/Pages/Contact/Form/Form';
import Info from '@/components/Pages/Contact/Info/Info';

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Navegação|Manutenção', href: '/navigation', current: false },
  { name: 'Içamento|Contrução', href: '/construction', current: false },
  { name: 'Plantio|Lavoura', href: '/planting', current: false },
  { name: 'Contato', href: '/contact', current: true }
];

export default function Contact() {
  return (
    <>
      <SiteLayout title='entre em contato' withHeader withFooter navigation={navigation}>
        <main className='relative max-w-7xl mx-auto my-32'>
          <div>
            <Info />
          </div>
          <div className='w-full h-0.5 flex justify-center bg-gray-200'></div>
          <div>
            <div className='max-w-7xl mx-auto '>
              <div className='bg-white w-full h-full rounded-sm px-8 py-6'>
                <div className='mb-6'>
                  <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
                    Entre em contato
                  </h2>
                  <span className='text-cinza-400 '>
                    envie um e-mail e faça já seu orçamento ou tire sua duvida
                  </span>
                </div>
                <div className='w-full'>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
