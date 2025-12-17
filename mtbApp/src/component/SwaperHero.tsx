// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-scroll";
// Images
import img1 from "../assets/kenny-eliason-1-aA2Fadydc-unsplash.jpg";
import img2 from "../assets/sincerely-media-dGxOgeXAXm8-unsplash.jpg";
import img3 from "../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";
import img4 from "../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { EffectFade, Autoplay } from "swiper/modules";

import "./swaperhero.css";
interface Slider {
  img:string;
  alt:string;
  text:string;
}

const slides:Slider[] = [
  {
    img: img4,
    alt: "MTB training",
    text: "2009-cu ildən etibarən tibbi təhsil, farmakologiya və müasir tədris proqramları üzrə fəaliyyət göstəririk.",
  },
  {
    img: img1,
    alt: "Medical education",
    text: "2009-cu ildən etibarən tibbi təhsil, farmakologiya və müasir tədris proqramları üzrə fəaliyyət göstəririk.",
  },
  {
    img: img2,
    alt: "Healthcare training",
    text: "2009-cu ildən etibarən tibbi təhsil, farmakologiya və müasir tədris proqramları üzrə fəaliyyət göstəririk.",
  },
  {
    img: img3,
    alt: "Professional development",
    text: "2009-cu ildən etibarən tibbi təhsil, farmakologiya və müasir tədris proqramları üzrə fəaliyyət göstəririk.",
  },
];

const SwaperHero = () => {
  return (
    <Swiper
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={3000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[EffectFade, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img src={slide.img} alt={slide.alt} className="w-full h-auto opacity-60 xl:h-[800px] object-cover" />
          <div className="absolute  top-1/2 right-0 xl:right-10 transform -translate-y-1/2 bg-transparent bg-opacity-50 text-white font-bold p-2 rounded hidden md:flex flex-col items-start  max-w-md md:max-w-xl  xl:max-w-2xl">
            <p className="mb-4 text-left text-lg md:text-3xl xl:text-4xl uppercase ">{slide.text}</p>
            <Link to="training"  smooth={true} duration={800} offset={-100} className=" py-3 px-5 rounded-lg text-sm sm:text-lg xl:text-xl text-white bg-transparent border border-white hover:bg-black hover:border-black transition-colors duration-300 cursor-pointer ">
              Təlimlərə bax
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwaperHero;
