import PortifolioLimpeone from '@/assets/images/portifolioLimpeza/pt11.jpeg';
import PortifolioLimpetwo from '@/assets/images/portifolioLimpeza/pt12.jpeg';
import PortifolioLimpethree from '@/assets/images/portifolioLimpeza/pt13.jpeg';
import PortifolioLimpefour from '@/assets/images/portifolioLimpeza/pt14.jpeg';
import PortifolioLimpesix from '@/assets/images/portifolioLimpeza/pt16.jpeg';
import PortifolioLimpeseven from '@/assets/images/portifolioLimpeza/pt17.jpeg';
import PortifolioLimpenine from '@/assets/images/portifolioLimpeza/pt19.jpeg';
import PortifolioLimpeten from '@/assets/images/portifolioLimpeza/pt20.jpeg';
import PortifolioLimpetwelve from '@/assets/images/portifolioLimpeza/pt22.jpeg';
import PortifolioLimpethirteen from '@/assets/images/portifolioLimpeza/pt23.jpeg';
import PortifolioLimpefifteen from '@/assets/images/portifolioLimpeza/pt25.jpeg';
import PortifolioLimpesixteen from '@/assets/images/portifolioLimpeza/pt26.jpeg';
import PortifolioLimpeseventeen from '@/assets/images/portifolioLimpeza/pt27.jpeg';
import PortifolioLimpeeighteen from '@/assets/images/portifolioLimpeza/pt28.jpeg';
import PortifolioLimpenineteen from '@/assets/images/portifolioLimpeza/pt29.jpeg';
import PortifolioLimpetwenty from '@/assets/images/portifolioLimpeza/pt55.jpeg';
import Image from 'next/image';

export default function PortifolioLimpeza() {
  return (
    <div className='flex flex-col gap-y-3'>
      <div className='flex flex-row gap-x-3'>
        <div className='object-cover'>
          <img src={PortifolioLimpeone.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 2 */}
        <div className='object-cover'>
          <img src={PortifolioLimpetwo.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 3 */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpethree.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/* 4 */}
        <div className='object-cover'>
          <img src={PortifolioLimpefour.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
      </div>
      {/* 6 */}
      <div className='flex flex-row gap-x-3'>
        <div className='object-cover'>
          <img src={PortifolioLimpesix.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 7 */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpeseven.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/* 9 */}
        <div className='object-cover'>
          <img src={PortifolioLimpenine.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
        {/* 10 */}
        <div className='object-cover'>
          <img src={PortifolioLimpeten.src} className='w-[294px] h-[294px] rounded-sm' />
        </div>
      </div>
      {/* 12 */}
      <div className='flex flex-row gap-x-3'>
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
        {/* 15 */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpefifteen.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/* 16 */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpesixteen.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
      </div>
      {/* 17 */}
      <div className='flex flex-row gap-x-3'>
        <div className='object-cover'>
          <img
            src={PortifolioLimpeseventeen.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/* 18 */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpeeighteen.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/* 19 */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpenineteen.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
        {/* 20 */}
        <div className='object-cover'>
          <img
            src={PortifolioLimpetwenty.src}
            className='w-[294px] h-[294px] rounded-sm'
          />
        </div>
      </div>
    </div>
  );
}
