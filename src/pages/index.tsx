import { SiteLayout } from '@/components/Layouts';
import BgTeste from '@/assets/images/teste.jpeg';

export default function Index() {
  return (
    <>
      <SiteLayout title='home' withFooter withHeader>
        <header>
          <div className='max-w-7xl mx-auto '>
            <div className='absolute z-10 mt-10'>
              <h2 className='text-gray-50 text-7xl'>asdsadasdad</h2>
            </div>
          </div>
          <img
            className='z-0 relative h-[560px] w-full object-cover'
            src={BgTeste.src}
            alt=''
          />
        </header>
        <div className='max-w-7xl mx-auto '>
          <main>
            <div>asdasdsadd</div>
          </main>
        </div>
        {/* <div className='mx-auto max-w-7xl bg-white'></div> */}
      </SiteLayout>
    </>
  );
}
