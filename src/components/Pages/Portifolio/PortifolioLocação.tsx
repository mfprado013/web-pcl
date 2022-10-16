import Portifoliolocaone from '@/assets/images/portifolioLocação/pt1.jpeg';
import Portifoliolocatwo from '@/assets/images/portifolioLocação/pt2.jpeg';
import Portifoliolocathree from '@/assets/images/portifolioLocação/pt3.jpeg';
import Portifoliolocasix from '@/assets/images/portifolioLocação/pt6.jpeg';
import Portifoliolocaseven from '@/assets/images/portifolioLocação/pt7.jpeg';
import Portifoliolocaeight from '@/assets/images/portifolioLocação/pt8.jpeg';
import Portifoliolocanine from '@/assets/images/portifolioLocação/pt9.jpeg';
import Portifoliolocaten from '@/assets/images/portifolioLocação/pt10.jpeg';

export default function PortifolioLocação() {
  return (
    <>
      <div className='hidden sm:flex flex-col gap-y-3'>
        <div className='flex flex-row gap-x-3'>
          {/* col 1 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            <div className='object-cover'>
              <img
                src={Portifoliolocaone.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/* 2 */}
            <div className='object-cover'>
              <img
                src={Portifoliolocatwo.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
          {/* col 2 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/* 3 */}
            <div className='object-cover'>
              <img
                src={Portifoliolocathree.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/* 6 */}
            <div className='object-cover'>
              <img
                src={Portifoliolocasix.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
        </div>
        {/* photos 2 */}
        <div className='flex flex-row gap-x-3'>
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/* 7 */}
            <div className='object-cover'>
              <img
                src={Portifoliolocaseven.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/* 8 */}
            <div className='object-cover'>
              <img
                src={Portifoliolocaeight.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/* 9 */}
            <div className='object-cover'>
              <img
                src={Portifoliolocanine.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/* 10 */}
            <div className='object-cover'>
              <img
                src={Portifoliolocaten.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='flex sm:hidden w-full flex-col items-center justify-center gap-y-3'>
        <div className='object-cover'>
          <img src={Portifoliolocaone.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img src={Portifoliolocathree.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img src={Portifoliolocaseven.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* */}
        <div className='object-cover'>
          <img src={Portifoliolocaeight.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img src={Portifoliolocaten.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
      </div>
    </>
  );
}
