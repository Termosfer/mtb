// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Images
import img1 from "../assets/kenny-eliason-1-aA2Fadydc-unsplash.webp";
import img1Wep from "../assets/kenny-eliason-1-aA2Fadydc-unsplash.jpg"
import img2 from "../assets/sincerely-media-dGxOgeXAXm8-unsplash.webp";
import img2Wep from "../assets/sincerely-media-dGxOgeXAXm8-unsplash.jpg"
import img3 from "../assets/scott-graham-5fNmWej4tAA-unsplash.webp";
import img3Wep from "../assets/scott-graham-5fNmWej4tAA-unsplash.jpg"
import img4 from "../assets/campaign-creators-gMsnXqILjp4-unsplash.webp";
import img4Wep from "../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg"

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper/modules";

import "./swaperhero.css";
interface Slider {
  img: string;
  imgWep: string;
  alt: string;
  text: string;
}

const slides: Slider[] = [
  {
    img: img4,
    imgWep: img4Wep,
    alt: "MTB training",
    text: "2009-cu ildən etibarən tibbi təhsil, farmakologiya və müasir tədris proqramları üzrə fəaliyyət göstəririk.",
  },
  {
    img: img1,
    imgWep: img1Wep,
    alt: "Medical education",
    text: "2009-cu ildən etibarən tibbi təhsil, farmakologiya və müasir tədris proqramları üzrə fəaliyyət göstəririk.",
  },
  {
    img: img2,
    imgWep: img2Wep,
    alt: "Healthcare training",
    text: "2009-cu ildən etibarən tibbi təhsil, farmakologiya və müasir tədris proqramları üzrə fəaliyyət göstəririk.",
  },
  {
    img: img3,
    imgWep: img3Wep,
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
      observer={false}
      observeParents={false}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <picture className="w-full">
            <source srcSet={slide.imgWep} type="image/webp" />
            <img
              loading="eager"
              src={slide.img}
              alt={slide.alt}
              className="w-full h-auto opacity-60 xl:h-[800px] object-cover"
            />
          </picture>
          <div className="absolute  top-1/2 right-0 xl:right-10 transform -translate-y-1/2 bg-transparent bg-opacity-50 text-white font-bold p-2 rounded hidden md:flex flex-col items-start  max-w-md md:max-w-md  xl:max-w-md">
            <p className="mb-4 text-left text-sm md:text-xl xl:text-2xl uppercase ">
              {slide.text}
            </p>
            <a
              href="#təlimlər"
              className="py-2 px-3 rounded-lg text-xs sm:text-base text-white bg-transparent border border-white  hover:bg-blue-600 hover:border-blue-600 transition"
            >
              Təlimlərə bax
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwaperHero;
