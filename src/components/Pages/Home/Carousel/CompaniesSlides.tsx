import Slider from 'react-slick';
import companie01 from '@/assets/images/companies/01.jpeg';
import companie02 from '@/assets/images/companies/02.jpeg';
import companie03 from '@/assets/images/companies/03.jpeg';
import companie04 from '@/assets/images/companies/04.jpeg';
import companie05 from '@/assets/images/companies/05.jpeg';
import companie06 from '@/assets/images/companies/06.jpeg';
import companie07 from '@/assets/images/companies/07.jpeg';
import companie08 from '@/assets/images/companies/08.jpeg';
import companie09 from '@/assets/images/companies/09.jpeg';
import companie10 from '@/assets/images/companies/10.jpeg';
import companie11 from '@/assets/images/companies/11.jpeg';
import companie12 from '@/assets/images/companies/12.jpeg';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    }
  ]
};

export default function CompaniesSlides() {
  return (
    <Slider {...settings}>
      <div>
        <a>
          <img className='w-60 h-60' src={companie01.src} alt='' />
        </a>
      </div>
      {/* 2 */}
      <div>
        <img className='w-60 h-60' src={companie02.src} alt='' />
      </div>
      {/* 3 */}
      <div>
        <img className='object-cover w-60 h-60' src={companie03.src} alt='' />
      </div>
      {/* 4 */}
      <div>
        <img className='object-cover w-60 h-60' src={companie04.src} alt='' />
      </div>
      {/* 5 */}
      <div>
        <img className='object-cover w-60 h-60' src={companie05.src} alt='' />
      </div>
      {/* 6 */}
      <div>
        <img className='object-cover w-60 h-60' src={companie06.src} alt='' />
      </div>
      {/* 7 */}
      <div>
        <img className='w-60 h-60' src={companie07.src} alt='' />
      </div>
      {/* 8 */}
      <div>
        <img className='object-cover w-60 h-60' src={companie08.src} alt='' />
      </div>
      {/* 9 */}
      <div>
        <img className='object-cover w-60 h-60' src={companie09.src} alt='' />
      </div>
      {/* 10 */}
      <div>
        <img className='object-cover w-60 h-60' src={companie10.src} alt='' />
      </div>
      {/* 11 */}
      <div>
        <img className=' w-60 h-60' src={companie11.src} alt='' />
      </div>
      {/* 12 */}
      <div>
        <img className='object-cover w-60 h-60' src={companie12.src} alt='' />
      </div>
    </Slider>
  );
}
