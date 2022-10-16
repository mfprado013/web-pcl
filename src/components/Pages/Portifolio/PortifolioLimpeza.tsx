import PortifolioLimpeone from '@/assets/images/portifolioLimpeza/pt11.jpeg';
import PortifolioLimpethree from '@/assets/images/portifolioLimpeza/pt13.jpeg';
import PortifolioLimpefour from '@/assets/images/portifolioLimpeza/pt14.jpeg';
import PortifolioLimpesix from '@/assets/images/portifolioLimpeza/pt16.jpeg';
import PortifolioLimpeseven from '@/assets/images/portifolioLimpeza/pt17.jpeg';
import PortifolioLimpeten from '@/assets/images/portifolioLimpeza/pt20.jpeg';
import PortifolioLimpetwelve from '@/assets/images/portifolioLimpeza/pt22.jpeg';
import PortifolioLimpethirteen from '@/assets/images/portifolioLimpeza/pt23.jpeg';

export default function PortifolioLimpeza() {
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
                src={PortifolioLimpeone.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/* */}
            <div className='object-cover'>
              <img
                src={PortifolioLimpethree.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
          {/* col 2 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/*  */}
            <div className='object-cover'>
              <img
                src={PortifolioLimpefour.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/*  */}
            <div className='flex flex-row gap-x-3'>
              <div className='object-cover'>
                <img
                  src={PortifolioLimpesix.src}
                  className='w-[294px] h-[294px] rounded-sm'
                />
              </div>
            </div>
          </div>
        </div>
        {/* group 2 */}
        <div className='flex flex-row gap-x-3'>
          {/* col 1 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            {/*  */}
            <div className='object-cover'>
              <img
                src={PortifolioLimpeseven.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/*  */}
            <div className='object-cover'>
              <img
                src={PortifolioLimpeten.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
          {/* col 2 */}
          <div className='flex flex-col md:flex-row gap-x-3 gap-y-3'>
            <div className='object-cover'>
              <img
                src={PortifolioLimpetwelve.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
            {/* 13 */}
            <div className='object-cover'>
              <img
                src={PortifolioLimpethirteen.src}
                className='w-[294px] h-[294px] rounded-sm'
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* mobile */}
      <div className='flex sm:hidden w-full flex-col items-center justify-center gap-y-3'>
        <div className='object-cover'>
          <img src={PortifolioLimpeone.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpethree.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img src={PortifolioLimpefour.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* */}
        <div className='object-cover'>
          <img src={PortifolioLimpesix.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpeseven.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img src={PortifolioLimpeten.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/*  */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpetwelve.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
      </div>
    </>
  );
}
