import Portifolioagroone from '@/assets/images/portifolioAgricola/pt62.jpeg';
import Portifolioagrothree from '@/assets/images/portifolioAgricola/pt64.jpeg';
import Portifoliagrofour from '@/assets/images/portifolioAgricola/pt65.jpeg';
import Portifolioagrofive from '@/assets/images/portifolioAgricola/pt66.jpeg';
import Portifolioagrosix from '@/assets/images/portifolioAgricola/pt67.jpeg';
import Portifolioagroseven from '@/assets/images/portifolioAgricola/pt70.jpeg';
import Portifolioagroeight from '@/assets/images/portifolioAgricola/pt72.jpeg';
import Portifolioagronine from '@/assets/images/portifolioAgricola/pt73.jpeg';
import Portifolioagroten from '@/assets/images/portifolioAgricola/pt74.jpeg';
import Portifolioagroeleven from '@/assets/images/portifolioAgricola/pt79.jpeg';
import Portifolioagrotwelve from '@/assets/images/portifolioAgricola/pt80.jpeg';
import Portifolioagrothirteen from '@/assets/images/portifolioAgricola/pt81.jpeg';
import Image from 'next/image';

export default function PortifolioLocação() {
  return (
    <div className='flex flex-wrap px-0 sm:px-3'>
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagroone.src} width={270} height={300} />
      </div>
      {/* 3 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagrothree.src} width={270} height={300} />
      </div>
      {/* 4 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifoliagrofour.src} width={270} height={300} />
      </div>
      {/* 5 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagrofive.src} width={270} height={300} />
      </div>
      {/* 6 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagrosix.src} width={270} height={300} />
      </div>
      {/* 7 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagroseven.src} width={270} height={300} />
      </div>
      {/* 8 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagroeight.src} width={270} height={300} />
      </div>
      {/* 9 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagronine.src} width={270} height={300} />
      </div>
      {/* 10 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagroten.src} width={270} height={300} />
      </div>
      {/* 11 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagroeleven.src} width={270} height={300} />
      </div>
      {/* 12 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagrotwelve.src} width={270} height={300} />
      </div>
      {/* 13 */}
      <div className='gap-x-8 px-2 py-2'>
        <Image src={Portifolioagrothirteen.src} width={270} height={300} />
      </div>
    </div>
  );
}
