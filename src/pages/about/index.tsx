import { SiteLayout } from '@/components/Layouts';

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
            <h1>sobre a empresa</h1>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
