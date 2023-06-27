import React, { useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation]);

interface Slide {
  src: string;
  width: number;
  height: number;
}

export default function Carousel() {
  const slides: Slide[] = [
    { src: "/images/certyfikat.png", width: 600, height: 1200 },
    { src: "/images/certyfikat.png", width: 600, height: 1200 },
    { src: "/images/certyfikat.png", width: 600, height: 1200 },
    { src: "/images/certyfikat.png", width: 600, height: 1200 },
    { src: "/images/certyfikat.png", width: 600, height: 1200 },
    { src: "/images/certyfikat.png", width: 600, height: 1200 },
    { src: "/images/certyfikat.png", width: 600, height: 1200 },
  ];

  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateLightboxIndex = ({ index: current }: { index: number }) => setLightboxIndex(current);

  const handleSlideClick = (index: number) => {
    setLightboxIndex(index);
    setOpen(true);
    console.log(lightboxIndex)
  };

  return (
    <>
      <div className="carousel">
        <Swiper navigation={true} className="swiper-container">
 
          {slides.map((slide, index) => (
            <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
              <img src={slide.src} alt="" width={slide.width} height={slide.height} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Lightbox
        render={{
            iconPrev: () => <img alt={''} className={''} src={'/assets/arrow_left.svg'} />,
            iconNext: () => <img  alt={''} src={'/assets/arrow_right.svg'} />,
            iconClose: () => <img alt={''} className={'lg_close_icon'} src={'/assets/close_icon.svg'} />,
        }}
        styles={{ container: { backgroundColor: "rgba(50, 50, 52, 0.9)" } }}
        open={open}
        index={lightboxIndex}
        close={() => setOpen(false)}
        slides={slides}
    />
    </>
  );
}