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
import Button from "@/components/Button";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useEffect, useRef, useState} from "react";

const Slideshow = () => {
    const swiper = useSwiper();
    useEffect(() => {

        console.log(swiper.progress);
    }, [swiper]);
    return (
        <h1>{swiper.slides.length}</h1>
    )
}

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
                placeholder="Name"
                className="border-2 border-gray-300 p-2 mb-2"
                value={formState.name}
                onChange={handleChange}
            />
            {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-2 border-gray-300 p-2 mb-2"
                value={formState.email}
                onChange={handleChange}
            />
            {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}

            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="border-2 border-gray-300 p-2 mb-2"
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
                <label>Option 1</label>
            </div>

            <div className="flex items-center mb-2">
                <input
                    type="radio"
                    name="radio"
                    value="option2"
                    className="mr-2"
                    onChange={handleChange}
                />
                <label>Option 2</label>
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
          <div className={"text-center"}>
            <H4TitleNoMG>Witamy w konfiguratorze</H4TitleNoMG>
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

<ContactFrom />
        <Swiper

            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

        >
            <Slideshow />
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
    </>
  );
}
