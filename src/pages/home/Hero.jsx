// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import slider1 from '../../assets/images/sliders/slider1.png';
import slider2 from '../../assets/images/sliders/slider2.jpg';
import slider3 from '../../assets/images/sliders/slider3.jpg';
import slider4 from '../../assets/images/sliders/slider4.jpg';
import slider5 from '../../assets/images/sliders/slider5.jpg';

const Hero = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={slider1}
              alt=""
              className="w-full h-[calc(100vh-500px)] md:h-[calc(100vh-50px)] object-cover"
            />
            <div className="absolute flex items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-gray-950 to-transparent ">
              <div className="text-white space-y-3 pl-3 md:pl-16  text-center md:text-left">
                <h1 className="text-5xl font-bold ">The Magic of Childhood</h1>
                <p className="text-xl font-medium tracking-wider w-full md:w-3/5">
                  Shop the latest Disney toys from classic characters to new
                  favorites.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider2}
              alt=""
              className="w-full h-[calc(100vh-500px)] md:h-[calc(100vh-50px)] object-cover"
            />
            <div className="absolute flex items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-gray-950 to-transparent ">
              <div className="text-white space-y-3 pl-3 md:pl-16 text-center md:text-left">
                <h1 className="text-5xl font-bold">
                  Explore What&apos;s Trending
                </h1>
                <p className="text-xl font-medium tracking-wider w-full md:w-3/5">
                  Feel Our Amazing Toy Collection
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider3}
              alt=""
              className="w-full h-[calc(100vh-500px)] md:h-[calc(100vh-50px)] object-cover"
            />
            <div className="absolute flex items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-gray-950 to-transparent ">
              <div className="text-white space-y-3 pl-3 md:pl-16 text-center md:text-left">
                <h1 className="text-5xl font-bold">Best Disney Toys</h1>
                <p className="text-xl font-medium tracking-wider w-full md:w-3/5">
                  Whether you are looking for the most popular dolls for your
                  little one, we have it all and more.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider4}
              alt=""
              className="w-full h-[calc(100vh-500px)] md:h-[calc(100vh-50px)] object-cover"
            />
            <div className="absolute flex items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-gray-950 to-transparent ">
              <div className="text-white space-y-3 pl-3 md:pl-16 text-center md:text-left">
                <h1 className="text-5xl font-bold">
                  Anything Your Heart Desires
                </h1>
                <p className="text-xl font-medium tracking-wider w-full md:w-3/5">
                  Shop Marvel, Frozen, Moana, Elsa & More
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider5}
              alt=""
              className="w-full h-[calc(100vh-500px)] md:h-[calc(100vh-50px)]"
            />
            <div className="absolute flex items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-gray-950 to-transparent ">
              <div className="text-white space-y-3 pl-3 md:pl-16 text-center md:text-left">
                <h1 className="text-5xl font-bold">Where Dreams Come True</h1>
                <p className="text-xl font-medium tracking-wider w-full md:w-3/5">
                  Shop the ultimate collection of Disney toys for kids
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
