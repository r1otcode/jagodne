import { AnimatePresence, motion } from "framer-motion";
import { useState, ReactElement } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import React from "react";
// use client

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface ImageAnimationProps {
  children: ReactElement[];
}

const ImageAnimation = ({children}: ImageAnimationProps) => {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleSlideClick = (index: number) => {
    setLightboxIndex(index);
    setOpen(true);
  };
  const slides = children.map((child, index) => ({
    src: child.props.src,
    width: 600,
    height: 600
  }));
  return (
    <AnimatePresence>
      <div className='inline-flex overflow-hidden bg-dark'>
        <motion.div
          className='inline-flex bg-dark'
          initial={{ x: 0 }}
          animate={{ x: '-200%' }}
          transition={{ duration: 30, delay: 2, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        >
          <Lightbox
            render={{
              iconPrev: () => <img alt='' className='' src='/assets/arrow_left.svg' />,
              iconNext: () => <img  alt='' src='/assets/arrow_right.svg' />,
              iconClose: () => <img alt='' className='lg_close_icon' src='/assets/close_icon.svg' />,
            }}
            styles={{ container: { backgroundColor: "rgba(50, 50, 52, 0.9)" } }}
            open={open}
            index={lightboxIndex}
            close={() => setOpen(false)}
            className="slider"
            slides={slides}
              
               
             
           
          />
          {children.map((img, index) => 
    React.cloneElement(img, {onClick: () => handleSlideClick(index)})
)}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ImageAnimation;