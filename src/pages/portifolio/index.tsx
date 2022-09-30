import { SiteLayout } from '@/components/Layouts';

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Sobre', href: '/about', current: false },
  { name: 'Portifólio', href: '/portifolio', current: true },
  { name: 'Contato', href: '/contact', current: false }
];

export default function Portifolio() {
  return (
    <>
      <SiteLayout title='portifolio' withHeader withFooter navigation={navigation}>
        <main className='relative max-w-7xl mx-auto'>
          <div>
            <h1>Portifolio</h1>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
