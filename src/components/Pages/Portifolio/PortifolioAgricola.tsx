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

export default function PortifolioLocação() {
  return (
    <div className='flex flex-col gap-y-3'>
      <div className='flex flex-row gap-x-3'>
        <div className='object-cover'>
          <img src={Portifolioagroone.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 3 */}
        <div className='object-cover'>
          <img src={Portifolioagrothree.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 4 */}
        <div className='object-cover'>
          <img src={Portifoliagrofour.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 5 */}
        <div className='object-cover'>
          <img src={Portifolioagrofive.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
      </div>
      {/* 6 */}
      <div className='flex flex-row gap-x-3'>
        <div className='object-cover'>
          <img src={Portifolioagrosix.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 7 */}
        <div className='object-cover'>
          <img src={Portifolioagroseven.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 8 */}
        <div className='object-cover'>
          <img src={Portifolioagroeight.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 9 */}
        <div className='object-cover'>
          <img src={Portifolioagronine.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
      </div>
      {/* 10 */}
      <div className='flex flex-row gap-x-3'>
        <div className='object-cover'>
          <img src={Portifolioagroten.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 11 */}
        <div className='object-cover'>
          <img
            src={Portifolioagroeleven.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/* 12 */}
        <div className='object-cover'>
          <img
            src={Portifolioagrotwelve.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/* 13 */}
        <div className='object-cover'>
          <img
            src={Portifolioagrothirteen.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
      </div>
    </div>
  );
}
