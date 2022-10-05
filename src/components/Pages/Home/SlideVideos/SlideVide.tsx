import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import Player from '@/components/Common/Player/Player';

export default function slideVideos() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper flex justify-center'
      >
        <SwiperSlide>
          <Player urlVideo='https://ik.imagekit.io/qrj8xgdbg/video03_PPj6VK9Oe.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664985362237' />
        </SwiperSlide>
        <SwiperSlide>
          <Player urlVideo='https://ik.imagekit.io/qrj8xgdbg/video04_t14KTwinjh.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664989480358' />
        </SwiperSlide>
        <SwiperSlide>
          <Player urlVideo='https://ik.imagekit.io/qrj8xgdbg/video05_KVXTa-Ecw.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664989477232' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
