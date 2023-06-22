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
    { src: "/images/wizualizacja_1.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_2.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_3.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_4.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
];
const photosData2 = [
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_1.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_2.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_3.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_4.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },

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
            name: formState.name === '' ? 'To pole jest obowiązkowe' : null,
            email: (!formState.email.includes('@') || formState.email === '') ? 'Email jest polem obowiązkowym' : null,
            phone: formState.phone === '' ? 'To pole jest obowiązkowe' : null,
            radio: formState.radio !== 'option1' ? 'Proszę zaznaczyć zgodę' : null

        };

        setFormErrors(errors);
    };
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        if (isShown) {
            document.body.classList.add("cursor-pointer");
        } else {
            document.body.classList.remove("cursor-pointer");
        }
    }, [isShown]);

    return (
        <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-col flex-row">
            <div className="xs:w-full sm:w-full  md:w-full lg:w-full w-[26%] xs:mt-[40px] xs:mb-[50px] sm:mt-[40px] sm:mb-[50px] md:mt-[40px] md:mb-[50px] lg:mt-[40px] lg:mb-[50px] ">
<Paragraph>
    Jesteś zainteresowany powyższą konfiguracją lub chciałbyś zapytać nas o jej szczegóły? Skontaktuj się z nami.
</Paragraph>
            </div>
            <div className="xs:w-full sm:w-full  md:w-full lg:w-full w-[74%] xl:pl-[40px] 2xl:pl-[40px] 3xl:pl-[40px] 4xl:pl-[40px]">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Imię i nazwisko / Nazwa firmy"
                        className="border border-grid border-gray-300 p-2  bg-transparent	font-normal text-[14px] leading-[22px] text-[#9C9C9C]"
                        value={formState.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <p className="text-light text-[12px] py-[5px]">{formErrors.name}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Adres e-mail"
                        className="border border-b-0 border-t-0 border-grid p-2 font-normal text-[14px] leading-[22px] text-[#9C9C9C]"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="text-light text-[12px] py-[5px]">{formErrors.email}</p>}

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Nr telefonu"
                        className="border border-grid p-2 font-normal text-[14px] leading-[22px] text-[#9C9C9C]"
                        value={formState.phone}
                        onChange={handleChange}
                    />
                    {formErrors.phone && <p className="text-light text-[12px] py-[5px]">{formErrors.phone}</p>}

                    <div className="flex items-center mb-2 form_separator">
                        <input
                            type="radio"
                            name="radio"
                            value="option1"
                            className="mr-2"
                            onChange={handleChange}
                        />
                        <label>Wyrażam zgodę, aby moje dane osobowe w zakresie obejmującym: imię, nazwisko, numer telefonu i adres e-mail, były przetwarzane przez JAGODNE Sp. z o.o. z siedzibą w Siedlcach przy ulicy Brzeskiej 65 (dalej zwana Jagodne) we własnych celach marketingowych, co obejmuje m.in. prezentowania usług w tym przygotowania odpowiedniej oferty.</label>
                    </div>
                    {formErrors.radio && <p className="text-light text-[12px] py-[5px]">{formErrors.radio}</p>}


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
                    <p className={'form_info'}>Administratorem Państwa danych osobowych jest Jagodne Sp. z o.o. z siedzibą w Siedlcach przy ulicy Brzeskiej 65. Informujemy, że podanie danych osobowych zawartych w formularzu jest dobrowolne, ale niezbędne do udzielenia odpowiedzi na zapytanie, a także, że przysługują Państwu prawa dostępu do Państwa danych osobowych, ich zmiany (w tym aktualizacji), a także pozostałe prawa opisane w Polityce prywatności. Dane osobowe podane przez Państwo będą przetwarzane w celu udzielenia odpowiedzi na zapytanie, a jeśli udzielili Państwo określonych zgód – również na podstawie ww. zgody i w celu w jej treści określonym. Zachęcamy do zapoznania się z pozostałymi informacjami dostępnymi w Polityce Prywatności, w tym dot. okresów przechowywania danych i kategorii odbiorców danych.</p>

                    <button
                        type="submit"

                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)} className={'hover:z-[50] form_btn font-medium'}
                    >
                        Prześlij
                    </button>
                </form>
            </div>
        </div>


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
            iconPrev: () => <img alt={''} className={''} src={'/assets/arrow_left.svg'} />,
            iconNext: () => <img  alt={''} src={'/assets/arrow_right.svg'} />,
            iconClose: () => <img alt={''} className={'lg_close_icon'} src={'/assets/close_icon.svg'} />,
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

const GalleryWrapper = ({photoSetFirst, photoSetSecond}) => {

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
        const navButtonsClasses = classNames('inline-flex items-center justify-center',
            'xs:mt-[60px]',
            'sm:mt-[60px]',
            'md:mt-[60px]',
            'lg:mt-[60px]',
            'xl:mt-[60px]',
            '2xl:mt-[60px]',
            '3xl:mt-[60px]',
            '4xl:mt-[80px]',

            )
    const countClasses = classNames('text-light font-normal text-ellipsis w-[80px]',
        'xs:text-[20px] xs:mx-[30px]',
        'sm:text-[20px] sm:mx-[30px]',
        'md:text-[30px] md:mx-[30px]',
        'lg:text-[30px] lg:mx-[30px]',
        'xl:text-[30px] xl:mx-[30px]',
        '2xl:text-[30px] 2xl:mx-[30px]',
        '3xl:text-[30px] 3xl:mx-[30px]',
        '4xl:text-[40px] 4xl:mx-[40px]',
        )
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        if (isShown) {
            document.body.classList.add("cursor-pointer");
        } else {
            document.body.classList.remove("cursor-pointer");
        }
    }, [isShown]);
        return (
            <>
                <div className={'text-center'}>
            <div className={navButtonsClasses}>


                <button onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)} className={'hover:z-[50]'} onClick={decrement}><img src={'/assets/arrow_outline_left.svg'}/></button>
                <span className={countClasses} >{count}/2</span>
                <button onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)} className={'hover:z-[50]'} onClick={increment}><img src={'/assets/arrow_outline_right.svg'}/></button>
            </div>
                </div>
                {count === 1 && <Gallery photos={photoSetFirst}/>}
                {count === 2 && <Gallery photos={photoSetSecond}/>}

            </>
        )
}

export default function Home() {
    const [selectedButton, setSelectedButton] = useState('S');

    const buttonsWrapperClasses = classNames('grid grid-cols-3',
    'xs:mt-[60px] xs:mb-[100px] xs:gap-[10px]',
    'sm:mt-[60px] sm:mb-[100px] sm:gap-[10px]',
    'md:mt-[60px] md:mb-[100px] md:gap-[10px]',
    'lg:mt-[60px] lg:mb-[100px] lg:gap-[10px]',
    'xl:mt-[100px] xl:mb-[140px]    xl:gap-[20px]',
    '2xl:mt-[100px] 2xl:mb-[140px] 2xl:gap-[40px]',
    '3xl:mt-[100px] 3xl:mb-[140px] 3xl:gap-[40px]',
    '4xl:mt-[100px] 4xl:mb-[140px]  4xl:gap-[40px]',
)
const activeButtonClasses = classNames('hover:z-[50] bg-accent rounded-[50px] text-light font-extrabold text-center py-[17px] text-[22px] leading-[1]')
const inactiveButtonClasses = classNames('hover:z-[50] bg-transparent rounded-[50px] text-grid border-grid border  font-extrabold text-center py-[17px] text-[22px] leading-[1] hover:bg-accent hover:text-light')
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        if (isShown) {
            document.body.classList.add("cursor-pointer");
        } else {
            document.body.classList.remove("cursor-pointer");
        }
    }, [isShown]);

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
              <div className={buttonsWrapperClasses}>
                <button  onMouseEnter={() => setIsShown(true)}
                         onMouseLeave={() => setIsShown(false)}  onClick={() => setSelectedButton('S')} className={selectedButton === 'S' ? activeButtonClasses : inactiveButtonClasses}>S</button>
                  <button   onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)} onClick={() => setSelectedButton('M')} className={selectedButton === 'M' ? activeButtonClasses : inactiveButtonClasses}>M</button>
                  <button  onMouseEnter={() => setIsShown(true)}
                           onMouseLeave={() => setIsShown(false)}  onClick={() => setSelectedButton('L')} className={selectedButton === 'L' ? activeButtonClasses : inactiveButtonClasses}>L</button>

              </div>
          </Container>

          {selectedButton === 'S' && <Configurator
              title={sConfigurator.title}
              objectInformations={sConfigurator.objectInformations}
              images={sConfigurator.images}
              objectDescription={sConfigurator.objectDescription}
          />}
          {selectedButton === 'M' && <Configurator
              title={mConfigurator.title}
              objectInformations={mConfigurator.objectInformations}
              images={mConfigurator.images}
              objectDescription={mConfigurator.objectDescription}
          />}
          {selectedButton === 'L' && <Configurator
              title={lConfigurator.title}
              objectInformations={lConfigurator.objectInformations}
              images={lConfigurator.images}
              objectDescription={lConfigurator.objectDescription}
          />}


      </div>
        <Container>
            {selectedButton === 'S' && <GalleryWrapper photoSetFirst={photosData} photoSetSecond={photosData2} />}
            {selectedButton === 'M' && <GalleryWrapper photoSetFirst={photosData2} photoSetSecond={photosData} />}
            {selectedButton === 'L' && <GalleryWrapper photoSetFirst={photosData} photoSetSecond={photosData2} />}

        </Container>

<Container>
    <div className={'text-center'}>
    <H4TitleNoMG>Wyślij zapytanie</H4TitleNoMG>
    <TextSpacer />
    </div>
<ContactFrom />
    </Container>

    </>
  );
}
