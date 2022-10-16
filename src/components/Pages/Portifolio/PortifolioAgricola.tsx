import Portifolioagroone from '@/assets/images/portifolioAgricola/pt62.jpeg';
import Portifolioagrothree from '@/assets/images/portifolioAgricola/pt64.jpeg';
import Portifoliagrofour from '@/assets/images/portifolioAgricola/pt65.jpeg';
import Portifolioagrofive from '@/assets/images/portifolioAgricola/pt66.jpeg';
import Portifolioagrosix from '@/assets/images/portifolioAgricola/pt67.jpeg';
import Portifolioagroseven from '@/assets/images/portifolioAgricola/pt70.jpeg';
import Portifolioagroeight from '@/assets/images/portifolioAgricola/pt72.jpeg';
import Portifolioagronine from '@/assets/images/portifolioAgricola/pt73.jpeg';

export default function PortifolioLocação() {
  return (
    <>
      <div className='hidden sm:flex flex-col gap-y-3'>
        {/* group 1 */}
        <div className='flex flex-row gap-x-3'>
          {/* col 1 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/*  */}
            <div className='object-cover'>
              <img
                src={Portifolioagroone.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/*  */}
            <div className='object-cover'>
              <img
                src={Portifolioagrothree.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
          {/* col 2 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/*  */}
            <div className='object-cover'>
              <img
                src={Portifoliagrofour.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/*  */}
            <div className='object-cover'>
              <img
                src={Portifolioagrofive.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>

          {/* group 2 */}
        </div>
        {/* 6 */}
        <div className='flex flex-row gap-x-3'>
          {/* col 1 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/*  */}
            <div className='object-cover'>
              <img
                src={Portifolioagrosix.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/*  */}
            <div className='object-cover'>
              <img
                src={Portifolioagroseven.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>

          {/* col 2 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/*  */}
            <div className='object-cover'>
              <img
                src={Portifolioagroeight.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/*  */}
            <div className='object-cover'>
              <img
                src={Portifolioagronine.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='flex sm:hidden w-full flex-col items-center justify-center gap-y-3'>
        <div className='object-cover'>
          <img src={Portifolioagroone.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img src={Portifoliagrofour.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img src={Portifolioagroseven.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* */}
        <div className='object-cover'>
          <img src={Portifolioagroeight.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img src={Portifolioagronine.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
      </div>
    </>
  );
}
