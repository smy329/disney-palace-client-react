import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper';

import gallery01 from '../../assets/images/dolls/01.jpg';
import gallery02 from '../../assets/images/dolls/02.jpg';
import gallery03 from '../../assets/images/dolls/03.jpg';
import gallery05 from '../../assets/images/dolls/05.jpg';
import gallery06 from '../../assets/images/dolls/06.jpg';
import gallery07 from '../../assets/images/dolls/07.jpg';
import gallery08 from '../../assets/images/dolls/08.jpg';
import gallery09 from '../../assets/images/dolls/09.jpg';
import gallery10 from '../../assets/images/dolls/10.jpg';

const Gallery = () => {
  return (
    <div className="space-y-5">
      <div
        className="flex flex-col items-center text-center space-y-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-5xl font-bold text-black">Our Top Collections</h1>
        <p className="text-xl font-medium tracking-wide w-3/5 text-slate-500 ">
          Discover the magic of Disney with our wide selection of toys for kids
          of all ages.
        </p>
      </div>
      <div className="flex justify-between px-16 py-10 ">
        <div data-aos="flip-left" data-aos-duration="1000">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[320px] h-[400px] shadow-xl"
            loop={true}
          >
            <SwiperSlide>
              <img
                src={gallery01}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery02}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery03}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div data-aos="flip-left" data-aos-duration="1000">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[320px] h-[400px] shadow-xl"
            loop={true}
          >
            <SwiperSlide>
              <img
                src={gallery07}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />{' '}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery05}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery06}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div data-aos="flip-left" data-aos-duration="1000">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[320px] h-[400px] shadow-xl"
            loop={true}
          >
            <SwiperSlide>
              <img
                src={gallery08}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />{' '}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery09}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery10}
                alt=""
                className="w-full h-full object-cover object-top border-2 border-primary rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
