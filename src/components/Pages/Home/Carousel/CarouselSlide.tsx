import Slider from 'react-slick';
import bg1 from '@/assets/images/work/bg1.jpeg';
import bg2 from '@/assets/images/work/bg2.jpeg';
import bg3 from '@/assets/images/work/bg3.jpeg';
import bg4 from '@/assets/images/work/bg4.jpeg';
import bg5 from '@/assets/images/work/bg5.jpeg';
import bg6 from '@/assets/images/work/bg6.jpeg';

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
    <>
      <Slider {...settings}>
        <div>
          <div className='z-20 absolute h-[720px] w-full bg-black opacity-20'> </div>
          <img
            className='z-0 h-[720px] w-full object-cover opacity-90'
            src={bg1.src}
            alt=''
          />
        </div>
        <div>
          <div className='z-20 absolute h-[720px] w-full bg-black opacity-20'> </div>
          <img
            className='z-0 h-[720px] w-full object-cover opacity-90'
            src={bg2.src}
            alt=''
          />
        </div>
        <div>
          <div className='z-20 absolute h-[720px] w-full bg-black opacity-20'> </div>
          <img
            className='z-0 h-[720px] w-full object-cover opacity-90'
            src={bg3.src}
            alt=''
          />
        </div>
        <div>
          <div className='z-20 absolute h-[720px] w-full bg-black opacity-20'> </div>
          <img
            className='z-0 h-[720px] w-full object-cover opacity-90'
            src={bg4.src}
            alt=''
          />
        </div>
        <div>
          <div className='z-20 absolute h-[720px] w-full bg-black opacity-20'> </div>
          <img
            className='z-0 h-[720px] w-full object-cover opacity-90'
            src={bg5.src}
            alt=''
          />
        </div>
      </Slider>
    </>
  );
}
