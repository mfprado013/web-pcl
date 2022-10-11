import Portifoliolocaone from '@/assets/images/portifolioLocação/pt1.jpeg';
import Portifoliolocatwo from '@/assets/images/portifolioLocação/pt2.jpeg';
import Portifoliolocathree from '@/assets/images/portifolioLocação/pt3.jpeg';
import Portifoliolocasix from '@/assets/images/portifolioLocação/pt6.jpeg';
import Portifoliolocaseven from '@/assets/images/portifolioLocação/pt7.jpeg';
import Portifoliolocaeight from '@/assets/images/portifolioLocação/pt8.jpeg';
import Portifoliolocanine from '@/assets/images/portifolioLocação/pt9.jpeg';
import Portifoliolocaten from '@/assets/images/portifolioLocação/pt10.jpeg';
import Image from 'next/image';

export default function PortifolioLocação() {
  return (
    <div className='flex flex-wrap px-0 sm:px-3 grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      <div className='gap-x-8 px-2 py-2 object-cover'>
        <Image src={Portifoliolocaone.src} width={270} height={300} />
      </div>
      {/* 2 */}
      <div className='gap-x-8 px-2 py-2 object-cover'>
        <Image src={Portifoliolocatwo.src} width={270} height={300} />
      </div>
      {/* 3 */}
      <div className='gap-x-8 px-2 py-2 object-cover'>
        <Image src={Portifoliolocathree.src} width={270} height={300} />
      </div>
      {/* 6 */}
      <div className='gap-x-8 px-2 py-2 object-cover'>
        <Image src={Portifoliolocasix.src} width={270} height={300} />
      </div>
      {/* 7 */}
      <div className='gap-x-8 px-2 py-2 object-cover'>
        <Image src={Portifoliolocaseven.src} width={270} height={300} />
      </div>
      {/* 8 */}
      <div className='gap-x-8 px-2 py-2 object-cover'>
        <Image src={Portifoliolocaeight.src} width={270} height={300} />
      </div>
      {/* 9 */}
      <div className='gap-x-8 px-2 py-2 object-cover'>
        <Image src={Portifoliolocanine.src} width={270} height={300} />
      </div>
      {/* 10 */}
      <div className='gap-x-8 px-2 py-2 object-cover'>
        <Image src={Portifoliolocaten.src} width={270} height={300} />
      </div>
    </div>
  );
}
