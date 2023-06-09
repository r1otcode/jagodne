import React from "react";
import classNames from "classnames";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph_light";
import SmallerContainer from "@/components/layouts/SmallerContainer";
import BiggerContainer from "@/components/layouts/BiggerContainer";
import TextSpacer from "@/components/layouts/TextSpacer";
import H3Title from "@/components/Typography/H3Title";
import SmallButton from "@/components/SmallButton";
import Carousel from "./lightBox";
import ImageAnimation from "@/components/imageAnimation";
const slides = [
  { src: "/images/wykonawstwo/certyfikaty/PL/Spawalnicze_Swiadectwo_Kawalifikacji_Jagodne_PL.png", width: 1200, height: 600 },
  { src: "/images/wizualizacja_2.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_3.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_4.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
  { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
];
const Content = () => {
  const howWedoItClasses = classNames(
    "xs:mt-[40px]",
    "sm:mt-[110px]",
    "md:mt-[120px]",
    "lg:mt-[120px]",
    "xl:mt-[120px]",
    "2xl:mt-[120px]",
    "3xl:mt-[120px]",
    "4xl:mt-[120px]"
  );

  return (
    <div className={howWedoItClasses} id={"section-1"}>
      <Container>
        <div className={"flex flex-col"}>
          <SmallerContainer right={true}>
            <BorderedContainer>
              <ImageAnimation>
              <img
                src={"/images/wykonawstwo/photo_0011_1.1.jpg"}
                alt={"photo"}
                className={
                  "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
                <img
                    src={"/images/wykonawstwo/photo_0010_1.2.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
                <img
                    src={"/images/wykonawstwo/photo_0009_1.3.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
              </ImageAnimation>
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent font-black"}>Odpowiedzialność</span>
                  <span className={"font-medium"}>
                    {" "}
                    za wszystkie fazy inwestycji
                  </span>
                </H3Title>
                <Paragraph>
                  Pracujemy w unikalnym modelu biznesowym, który umożliwia
                  kompleksową obsługę inwestycji, począwszy od zaprojektowania i
                  uzyskania pozwolenia na budowę po wybudowanie i uzyskanie
                  pozwolenia na użytkowanie, co doceniają inwestorzy oczekujący
                  kompleksowej współpracy, pozwalającej zaoszczędzić czas na
                  formalności i poszukiwanie częściowych wykonawców.
                  <br />
                  <br />
                  Umiejętnie potrafimy łączyć estetykę z funkcjonalnością, a w
                  założeniach projektowych przewidujemy i uwzględniamy
                  scenariusze korelujące parametry bieżącego i przyszłego
                  przeznaczenia obiektu na wypadek zmiany kierunku biznesowego
                  inwestycji.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={false}>
            <BorderedContainer>
              <ImageAnimation>
                <img
                    src={"/images/wykonawstwo/photo_0008_2.1.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
                <img
                    src={"/images/wykonawstwo/photo_0007_2.2.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
                <img
                    src={"/images/wykonawstwo/photo_0006_2.3.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
              </ImageAnimation>
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent font-black"}>
                    Zaplecze technologiczno-produkcyjne
                  </span>{" "}
                  <span className={"font-medium"}>
                    {" "}
                    dostosowane do potrzeb najbardziej wymagających
                    przedsięwzięć budowlanych
                  </span>
                </H3Title>
                <Paragraph>
                  Dysponujemy własną wytwórnią, z której w każdym miesiącu
                  wyjeżdża do klientów ponad sto ton konstrukcji stalowych.
                  Wykonujemy usługi prefabrykacyjne i dostarczamy gotowe
                  elementy na miejsce budowy, wznosząc obiekty zgodnie z
                  założeniami projektowymi.
                  <br />
                  <br />
                  Specjalizujemy się w prefabrykowanym budownictwie modułowym,
                  w ramach którego wytwarzamy i wznosimy Obiekty Systemowe,
                  wykonywane w technologii suchej zabudowy, co w stosunku do
                  tradycyjnych rozwiązań skraca o jedną drugą czas realizacji
                  robót.
                </Paragraph>
              </TextSpacer>
              <div className={"border-t-grid border-t"}>
                <TextSpacer>
                  <Paragraph>
                    W celu precyzyjnego oszacowania kosztów inwestycji,
                    zachęcamy do skorzystania z naszego Konfiguratora Obiektów
                    Systemowych:
                  </Paragraph>
                  <br />
                  <SmallButton link={"/konfigurator-obiektow-systemowych"}>
                    Otwórz konfigurator
                  </SmallButton>
                </TextSpacer>
              </div>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={true}>
            <BorderedContainer>
              <ImageAnimation>
                <img
                    src={"/images/wykonawstwo/photo_0005_3.1.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
                <img
                    src={"/images/wykonawstwo/photo_0004_3.2.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
                <img
                    src={"/images/wykonawstwo/photo_0003_3.3.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
              </ImageAnimation>
              <TextSpacer>
                <H3Title>
                  <span className={"font-medium"}>
                    {" "}
                    Stosujemy technologie pozwalające na urzeczywistnienie wizji
                  </span>{" "}
                  <span className={"text-accent font-black"}>
                    {" "}
                    wyprzedzających swoje czasy
                  </span>
                </H3Title>
                <Paragraph>
                  Działania na etapie wykonawczym wspieramy efektywnymi
                  rozwiązaniami technologicznymi, pozwalającymi na
                  minimalizowanie ryzyka błędu podczas wznoszenia obiektów oraz
                  monitorowanie parametrów budynku po wybudowaniu.
                  Współpracujemy z partnerami wyspecjalizowanymi w technologiach
                  opartych na sztucznej inteligencji, wykorzystywanych w
                  warstwie operacyjnej inwestycji o charakterze produkcyjnym i
                  magazynowym.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={false}>
            <BorderedContainer>
              <ImageAnimation>
                <img
                    src={"/images/wykonawstwo/photo_0002_4.1.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
                <img
                    src={"/images/wykonawstwo/photo_0001_4.2.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
                <img
                    src={"/images/wykonawstwo/photo_0000_4.3.jpg"}
                    alt={"photo"}
                    className={
                      "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                    }
                />
              </ImageAnimation>
              <TextSpacer>
                <H3Title>
                  <span className={"font-medium"}>Wspieramy inwestycje na</span>
                  <span className={"text-accent font-black"}>
                    {" "}
                    etapie przedwykonawczym
                  </span>
                </H3Title>
                <Paragraph>
                  Oferujemy usługi prefabrykacyjne konstrukcji stalowych wraz
                  z transportem na miejsce budowy. Metody wytwórcze dobieramy
                  tak, aby optymalizować zużycie surowców i czasochłonność
                  robocizny oraz minimalizować koszty produkcyjne i
                  środowiskowe. Działamy odpowiedzialnie i sprawnie, ręcząc za
                  jakość wytworzonych i dostarczonych prefabrykatów oraz
                  terminową realizację poszczególnych etapów prac.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent font-black"}>Certyfikowane</span>
                  <br /> <span className={"font-medium"}>rozwiązania</span>
                </H3Title>
                <Paragraph>
                  Konstrukcje wytwarzane w naszym zakładzie produkcyjnym
                  podlegają rygorystycznym, europejskim normom EN ISO 3834-2, EN
                  1090-2, klasom EXC1-EXC3 oraz EN 1090-1 i oznakowaniu CE -
                  ZA.3.2 i ZA.3.4, weryfikowanymi cyklicznie przez
                  profesjonalnych audytorów branżowych z ramienia niezależnych
                  jednostek certyfikujących.
                  <br /> <br />
                  Wytwarzane przez nas elementy posiadają zabezpieczenia
                  antykorozyjne i przeciwpożarowe, ocynkiem ogniowym metodą
                  zanurzeniową i systemem malarskim metodą hydrodynamiczną
                  w klasach korozyjności środowiska C1-C5-M i odporności
                  ogniowej R15-R240.{" "}
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
            <BorderedContainer>
              <Carousel slides={slides} />
            </BorderedContainer>
          </SmallerContainer>
        </div>
      </Container>
    </div>
  );
};
export default Content;
