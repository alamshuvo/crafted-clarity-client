import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "./Slider.css";
const Slider = () => {

  return (
    <Swiper
      autoplay={{ delay: 4000 }}
      slidesPerView={2}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 2,
          spaceBetween: 30,
        },
       
      }}
      // slidesPerView={1}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      loop={true}
      className="mySwiper"
      
    >
      <div className="md:min-h-screen min-h-[400px] ">
        <SwiperSlide>
          <div className="slide slide1 w-full h-full text-white  flex justify-center items-center flex-col space-y-5">
            <p className=" text-center bg-black ">
              Wooden furniture and sculptures offer timeless elegance and
              natural beauty.
              {/* <span>{text}</span> */}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2 flex justify-center items-center flex-col space-y-5 bg-black w-full h-full text-white">
            <p className="bg-black text-center">
              Wooden home decor enhances ambiance with rustic charm and natural
              elements.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3 bg-black w-full h-full text-white flex justify-center items-center flex-col space-y-5">
            <p className="bg-black text-center">
              Wooden utensils and kitchenware offer durability, style, and
              eco-friendliness.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4  bg-black w-full h-full text-white flex justify-center items-center flex-col space-y-5">
            <p className="bg-black text-center">
              Jute home decor infuses spaces with organic texture and earthy
              elegance.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide5 bg-black w-full h-full text-white flex justify-center items-center flex-col space-y-5">
            <p className="bg-black text-center">
              Jute kitchenware and utensils combine sustainability with stylish
              functionality beautifully.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide6 flex  w-full h-full text-white justify-center items-center flex-col space-y-5">
            <p className="bg-black text-center">
              Jute and wooden jewelry exude earthy charm and eco-friendly
              elegance.
            </p>
          </div>
        </SwiperSlide>
      </div>
      
    </Swiper>
  );
};

export default Slider;
