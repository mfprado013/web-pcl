import Slider from 'react-slick';
import BgTeste from '@/assets/images/teste.jpeg';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000
};

export default function CarouselSlide() {
  return (
    <Slider {...settings}>
      <div>
        <img
          className='z-0 h-[720px] w-full object-cover opacity-90'
          src={BgTeste.src}
          alt=''
        />
      </div>
      <div>
        <img
          className='z-0 h-[720px] w-full object-cover opacity-90'
          src={BgTeste.src}
          alt=''
        />
      </div>
    </Slider>
  );
}
