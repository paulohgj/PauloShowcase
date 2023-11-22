import { useState, useEffect } from "react";

import { carousel } from "../data/carousel";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

//Swiper effects
import { Autoplay, EffectCards, Pagination, Navigation } from "swiper/modules";

export const Slider = () => {
  const [slideNav, setSlideNav] = useState(true);

  useEffect(() => {
    const handleRisize = () => {
      if (window.innerWidth < 720) {
        setSlideNav(false);
      } else {
        setSlideNav(true);
      }
    };

    window.addEventListener("resize", handleRisize);

    return () => {
      window.removeEventListener("resize", handleRisize);
    };
  }, []);

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={slideNav}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      effect={"cards"}
      grabCursor={true}
      modules={[Autoplay, EffectCards, Pagination, Navigation]}
      className="mySwiper"
    >
      {carousel.map((item) => (
        <SwiperSlide key={item.id}>
          <a href={item.link} target="_blank">
            <img src={item.img} alt={item.name} className="slide-item" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
