import Slider from 'react-slick';
import Portifolio from '@/assets/images/portifolio/file.png';

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

export default function PortifolioAgricola() {
  return (
    <Slider {...settings}>
      <div>
        <a>
          <img className='object-cover w-60 h-60' src={Portifolio.src} alt='' />
        </a>
      </div>
      {/* 2 */}
      <div>
        <a>
          <img className='object-cover w-60 h-60' src={Portifolio.src} alt='' />
        </a>
      </div>
      {/* 3 */}
      <div>
        <a>
          <img className='object-cover w-60 h-60' src={Portifolio.src} alt='' />
        </a>
      </div>
      {/* 4 */}
      <div>
        <a>
          <img className='object-cover w-60 h-60' src={Portifolio.src} alt='' />
        </a>
      </div>
      {/* 5 */}
      <div>
        <a>
          <img className='object-cover w-60 h-60' src={Portifolio.src} alt='' />
        </a>
      </div>
      {/* 6 */}
      <div>
        <a>
          <img className='object-cover w-60 h-60' src={Portifolio.src} alt='' />
        </a>
      </div>
    </Slider>
  );
}
