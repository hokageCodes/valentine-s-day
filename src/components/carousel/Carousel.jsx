import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards } from 'swiper/modules';
import One from '../../assets/begin.jpg';
import Two from '../../assets/mile.jpg';
import Three from '../../assets/adv.jpg';
import Four from '../../assets/laugh.jpg';

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={One} alt="" className="swiper-slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Two} alt="" className="swiper-slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Three} alt="" className="swiper-slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Four} alt="" className="swiper-slide-image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
