"use client"
import Configurator from "@/components/layouts/configurator";
import {
  sConfigurator,
  mConfigurator,
  lConfigurator,
} from "@/mockupData/configurator";
import H4TitleNoMG from "@/components/Typography/H4TitleNoMG";
import Paragraph from "@/components/Typography/Paragraph";
import Container from "@/components/layouts/container";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photosData = [
    { src: "/images/projektowanie_1.png", width: 800, height: 600 },
    { src: "/images/projektowanie_2.png", width: 800, height: 600 },
    { src: "/images/projektowanie_3.png", width: 800, height: 600 },
    { src: "/images/projektowanie_4.png", width: 800, height: 600 },
    { src: "/images/projektowanie_5.png", width: 800, height: 600 },
    { src: "/images/projektowanie_5.png", width: 800, height: 600 },
];
const photosData2 = [
    { src: "/images/projektowanie_5.png", width: 800, height: 600 },
    { src: "/images/projektowanie_1.png", width: 800, height: 600 },
    { src: "/images/projektowanie_2.png", width: 800, height: 600 },
    { src: "/images/projektowanie_3.png", width: 800, height: 600 },
    { src: "/images/projektowanie_4.png", width: 800, height: 600 },
    { src: "/images/projektowanie_5.png", width: 800, height: 600 },

];

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import TextSpacer from "@/components/spacers/textSpacer";



const ContactFrom = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        radio: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: null,
        email: null,
        phone: null,
        radio: null
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {
            name: formState.name === '' ? 'Name is required' : null,
            email: (!formState.email.includes('@') || formState.email === '') ? 'Valid email is required' : null,
            phone: formState.phone === '' ? 'Phone is required' : null,
            radio: formState.radio === '' ? 'Please select one option' : null
        };

        setFormErrors(errors);
    };

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko / Nazwa firmy"
                className="border border-grid border-gray-300 p-2  bg-transparent	font-normal text-[14px] leading-[22px] text-[#9C9C9C]"
                value={formState.name}
                onChange={handleChange}
            />
            {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}

            <input
                type="email"
                name="email"
                placeholder="Adres e-mail"
                className="border border-b-0 border-t-0 border-grid p-2 font-normal text-[14px] leading-[22px] text-[#9C9C9C]"
                value={formState.email}
                onChange={handleChange}
            />
            {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}

            <input
                type="tel"
                name="phone"
                placeholder="Nr telefonu"
                className="border border-grid p-2 font-normal text-[14px] leading-[22px] text-[#9C9C9C]"
                value={formState.phone}
                onChange={handleChange}
            />
            {formErrors.phone && <p className="text-red-500 text-xs">{formErrors.phone}</p>}

            <div className="flex items-center mb-2">
                <input
                    type="radio"
                    name="radio"
                    value="option1"
                    className="mr-2"
                    onChange={handleChange}
                />
                <label>Wyrażam zgodę, aby moje dane osobowe w zakresie obejmującym: imię, nazwisko, numer telefonu i adres e-mail, były przetwarzane przez JAGODNE Sp. z o.o. z siedzibą w Siedlcach przy ulicy Brzeskiej 65 (dalej zwana Jagodne) we własnych celach marketingowych, co obejmuje m.in. prezentowania usług w tym przygotowania odpowiedniej oferty.</label>
            </div>

            <div className="flex items-center mb-2">
                <input
                    type="radio"
                    name="radio"
                    value="option2"
                    className="mr-2"
                    onChange={handleChange}
                />
                <label>Wyrażam zgodę na otrzymywanie od Jagodne informacji handlowo-marketingowych w postaci wiadomości elektronicznych. (opcjonalnie)</label>
            </div>
            {formErrors.radio && <p className="text-red-500 text-xs">{formErrors.radio}</p>}

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
            >
                Submit
            </button>
        </form>
    );
}


const Gallery = ({photos}) => {
    const galleryClasses = classNames(
        'xs:mt-[60px] xs:mb-[100px]',
        'sm:mt-[60px] sm:mb-[100px]',
        'md:mt-[60px] md:mb-[100px]',
        'lg:mt-[60px] lg:mb-[100px]',
        'xl:mt-[60px] xl:mb-[140px]',
        '2xl:mt-[60px] 2xl:mb-[140px]',
        '3xl:mt-[60px] 3xl:mb-[140px]',
        '4xl:mt-[80px] 4xl:mb-[140px]',

        )
    const [index, setIndex] = useState(-1);
    return (
        <div className={galleryClasses}>
        <PhotoAlbum
            columns={(containerWidth) => {
                if (containerWidth < 479) return 1;
                if (containerWidth < 1365) return 2;
                return 3;
            }}
            spacing={(containerWidth) => {
                if (containerWidth < 1023) return 10;
                if (containerWidth < 1365) return 20;
                return 40;
            }}
            layout="rows" photos={photos}  onClick={({ index }) => setIndex(index)}
        />
    <Lightbox
        render={{
            iconPrev: () => <img className={''} src={'/assets/arrow_left.svg'} />,
            iconNext: () => <img src={'/assets/arrow_right.svg'} />,
            iconClose: () => <img className={'lg_close_icon'} src={'/assets/close_icon.svg'} />,
        }}
        styles={{ container: { backgroundColor: "rgba(50, 50, 52, 0.9)" } }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
    />
        </div>
    )

}

const GalleryWrapper = () => {

        const [count, setCount] = useState(1);

        const increment = () => {
            if (count < 2) {
                setCount(prevCount => prevCount + 1);
            }
        };

        const decrement = () => {
            if (count > 1) {
                setCount(prevCount => prevCount - 1);
            }
        }
        return (
            <>
                <div className={'text-center'}>
            <div className={'inline-flex items-center '}>


                <button onClick={decrement}><img src={'/assets/arrow_outline_left.svg'}/></button>
                <h1>Count: {count} / 2</h1>
                <button onClick={increment}><img src={'/assets/arrow_outline_right.svg'}/></button>
            </div>
                </div>
                {count === 1 && <Gallery photos={photosData}/>}
                {count === 2 && <Gallery photos={photosData2}/>}

            </>
        )
}

export default function Home() {




    return (
    <>
      <DefaultHeader
        title={"Konfigurator obiektów systemowych"}
        description={
          "Konfigurator pozwala na szybką i precyzyjną estymację kosztów oraz wizualizację budynków modułowych, na podstawie wybranych parametrów."
        }
      >
        Precyzyjne szacowanie kosztów inwestycji i realistyczne wizualizacje
      </DefaultHeader>
      <div id={"section-1"}>
        <Container>
          <div className={"text-center xs:mt-[139px] sm:mt-[40px] md:mt-[120px] lg:mt-[120px] xl:mt-[120px] 2xl:mt-[120px] 3xl:mt-[120px] 4xl:mt-[120px]"}>
            <H4TitleNoMG>Witamy w konfiguratorze</H4TitleNoMG>
              <TextSpacer />
            <Paragraph>
              Obsługa konfiguratora jest intuicyjna, narzędzie umożliwia
              wygenerowanie wizualizacji planowanej inwestycji, a wybór budynku
              modułowego powstałego w symulacji skraca proces projektowy do
              zaledwie miesiąca. <br />
              <br />
              Zacznij od wybrania wielkości budynku:
            </Paragraph>
          </div>
        </Container>

          <Container>
              <div className={"grid grid-cols-3"}>
                <div className={'bg-accent rounded-[50px] text-light font-extrabold text-center py-[17px] text-[22px] leading-[1]'}>S</div>
                  <div className={'bg-accent rounded-[50px] text-light font-extrabold text-center py-[17px] text-[22px] leading-[1]'}>M</div>
                  <div className={'bg-accent rounded-[50px] text-light font-extrabold text-center py-[17px] text-[22px] leading-[1]'}>L</div>

              </div>
          </Container>
        <Configurator
          title={sConfigurator.title}
          objectInformations={sConfigurator.objectInformations}
          images={sConfigurator.images}
          objectDescription={sConfigurator.objectDescription}
        />
      </div>
        <Container>
<GalleryWrapper />
        </Container>
<ContactFrom />

    </>
  );
}
