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
            <h1>contato</h1>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
