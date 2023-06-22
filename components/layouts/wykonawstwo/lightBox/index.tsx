import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";



export default function Carousel() {
    const slides = [
        { src: "/images/placeholder.jpg", width: 600, height: 1200 },
        { src: "/images/placeholder.jpg", width: 600, height: 1200 },
        { src: "/images/placeholder.jpg", width: 600, height: 1200 },
        { src: "/images/placeholder.jpg", width: 600, height: 1200 },
        { src: "/images/placeholder.jpg", width: 600, height: 1200 },
        { src: "/images/placeholder.jpg", width: 600, height: 1200 },
        { src: "/images/placeholder.jpg", width: 600, height: 1200 },

      ]; 
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);
   
      
      
      return (
    <>
      
<div className="cert">
      <Lightbox
        index={index}
        slides={slides}
        plugins={[Inline]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        render={{
             iconPrev: () => <img alt={''} className={''} src={'/assets/arrow_left.svg'} />,
             iconNext: () => <img  alt={''} src={'/assets/arrow_right.svg'} />,
            iconClose: () => <img alt={''} className={'lg_close_icon'} src={'/assets/close_icon.svg'} />,
          }}
        inline={{
          style: {
            width: "60%",
            height: "600px",
            maxWidth: "900px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
            
          },
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        render={{
            iconPrev: () => <img alt={''} className={''} src={'/assets/arrow_left.svg'} />,
            iconNext: () => <img  alt={''} src={'/assets/arrow_right.svg'} />,
           iconClose: () => <img alt={''} className={'lg_close_icon'} src={'/assets/close_icon.svg'} />,
         }}
        index={index}
        slides={slides}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
      </div>
    </>
  );
}
