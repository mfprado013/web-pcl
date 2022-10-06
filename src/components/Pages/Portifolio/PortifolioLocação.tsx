import Portifoliolocaone from '@/assets/images/portifolioLocação/pt1.jpeg';
import Portifoliolocatwo from '@/assets/images/portifolioLocação/pt2.jpeg';
import Portifoliolocathree from '@/assets/images/portifolioLocação/pt3.jpeg';
import Portifoliolocafour from '@/assets/images/portifolioLocação/pt4.jpeg';
import Portifoliolocafive from '@/assets/images/portifolioLocação/pt5.jpeg';
import Portifoliolocasix from '@/assets/images/portifolioLocação/pt6.jpeg';
import Portifoliolocaseven from '@/assets/images/portifolioLocação/pt7.jpeg';
import Portifoliolocaeight from '@/assets/images/portifolioLocação/pt8.jpeg';
import Portifoliolocanine from '@/assets/images/portifolioLocação/pt9.jpeg';
import Portifoliolocaten from '@/assets/images/portifolioLocação/pt10.jpeg';

export default function PortifolioLocação() {
  return (
    <div className='flex flex-wrap px-0 sm:px-3'>
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className='w-60 h-60' src={Portifoliolocaone.src} alt='' />
        </a>
      </div>
      {/* 2 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className='w-60 h-60' src={Portifoliolocatwo.src} alt='' />
        </a>
      </div>
      {/* 3 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className=' w-60 h-60' src={Portifoliolocathree.src} alt='' />
        </a>
      </div>
      {/* 4 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className=' w-60 h-60' src={Portifoliolocafour.src} alt='' />
        </a>
      </div>
      {/* 5 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className=' w-60 h-60' src={Portifoliolocafive.src} alt='' />
        </a>
      </div>
      {/* 6 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className=' w-60 h-60' src={Portifoliolocasix.src} alt='' />
        </a>
      </div>
      {/* 7 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className=' w-60 h-60' src={Portifoliolocaseven.src} alt='' />
        </a>
      </div>
      {/* 8 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className=' w-60 h-60' src={Portifoliolocaeight.src} alt='' />
        </a>
      </div>
      {/* 9 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className=' w-60 h-60' src={Portifoliolocanine.src} alt='' />
        </a>
      </div>
      {/* 10 */}
      <div className='gap-x-8 px-2 py-2'>
        <a>
          <img className=' w-60 h-60' src={Portifoliolocaten.src} alt='' />
        </a>
      </div>
    </div>
  );
}
