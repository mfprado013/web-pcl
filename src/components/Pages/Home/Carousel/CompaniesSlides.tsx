import Slider from 'react-slick';
import companyLogo from '@/assets/images/companies/companie-fake.jpeg';

import Link from 'next/link';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
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
        <Link href=''>
          <a>
            <img className='object-cover w-60 h-60' src={companyLogo.src} alt='' />
          </a>
        </Link>
      </div>
      {/* 2 */}
      <div>
        <Link href=''>
          <a>
            <img className='object-cover w-60 h-60' src={companyLogo.src} alt='' />
          </a>
        </Link>
      </div>
      {/* 3 */}
      <div>
        <Link href=''>
          <a>
            <img className='object-cover w-60 h-60' src={companyLogo.src} alt='' />
          </a>
        </Link>
      </div>
      {/* 4 */}
      <div>
        <Link href=''>
          <a>
            <img className='object-cover w-60 h-60' src={companyLogo.src} alt='' />
          </a>
        </Link>
      </div>
      {/* 5 */}
      <div>
        <Link href=''>
          <a>
            <img className='object-cover w-60 h-60' src={companyLogo.src} alt='' />
          </a>
        </Link>
      </div>
      {/* 6 */}
      <div>
        <Link href=''>
          <a>
            <img className='object-cover w-60 h-60' src={companyLogo.src} alt='' />
          </a>
        </Link>
      </div>
    </Slider>
  );
}
