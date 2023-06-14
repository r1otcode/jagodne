import React from "react";
import classNames from "classnames";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph";
import SmallerContainer from "@/components/layouts/SmallerContainer";
import BiggerContainer from "@/components/layouts/BiggerContainer";
import TextSpacer from "@/components/layouts/TextSpacer";
import H3Title from "@/components/Typography/H3Title";
import SmallButton from "@/components/SmallButton";

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
              <img
                src={"/images/generalny_1.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"font-medium"}>
                    Realizujemy inwestycje ukierunkowane na
                  </span>
                  <span className={"text-accent font-black"}>
                    {" "}
                    maksymalizację zysków
                  </span>
                </H3Title>
                <Paragraph>
                  Świadczymy usługi generalnego wykonawstwa, biorąc
                  odpowiedzialność za kompleksową realizację perspektywicznych
                  inwestycji budowlanych. Dysponujemy wszelkimi kompetencjami,
                  pozwalającymi na samodzielne prowadzenie przedsięwzięcia
                  inwestycyjnego od zaprojektowania po wybudowanie, włączając w
                  to doradztwo techniczne oraz obsługę części formalno-prawnej.
                  <br />
                  <br />
                  Odpowiadamy za wszelkie czynności umożliwiające rozpoczęcie
                  zamierzenia budowlanego, począwszy od uzyskania niezbędnych
                  zgód po wykonanie prac zadeklarowanych w umowie współpracy.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={false}>
            <BorderedContainer>
              <img
                src={"/images/generalny_2.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"font-medium"}>Inwestorski mindset i </span>

                  <span className={"text-accent font-black"}>
                    perspektywa 360
                  </span>
                </H3Title>
                <Paragraph>
                  Występując w roli generalnego wykonawcy, patrzymy na nowe
                  zamierzenie budowlane holistycznie, myśląc kategoriami zwrotu
                  z inwestycji już na etapie briefu. Planujemy odpowiedzialnie i
                  w ramach jednego projektu szukamy wielu alternatywnych szans
                  biznesowych na potrzeby różnych ścieżek rozwoju.
                  <br />
                  <br />
                  Identyfikujemy czynniki ryzyka i definiujemy obszary z
                  potencjałem na jak największą zyskowność, co zabezpiecza
                  inwestycję w przypadku wystąpienia nieprzewidzianych
                  okoliczności, a także nadaje jej uniwersalnego charakteru,
                  gwarantując łatwość adaptacji na wypadek innego niż docelowe
                  przeznaczenia.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={true}>
            <BorderedContainer>
              <img
                src={"/images/generalny_3.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent font-black"}>
                    Gwarantujemy jakość{" "}
                  </span>
                  <br />

                  <span className={"font-medium"}> i dbamy o terminy</span>
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
              <img
                src={"/images/generalny_4.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  Budownictwo kubaturowe to
                  <span className={"text-accent font-black"}>
                    {" "}
                    nasza specjalność
                  </span>
                </H3Title>
                <Paragraph>
                  Realizujemy inwestycje budowlane wielokondygnacyjnych obiektów
                  przemysłowych, komercyjnych oraz użyteczności publicznej –
                  również w modelu build to suit. Wznosimy obiekty o
                  charakterze: <br /> <br />
                </Paragraph>
                <ul className={"blue-marker"}>
                  <li
                    className={
                      "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                    }
                  >
                    <Paragraph>
                      <span className={'font-extrabold'}>przemysłowym</span> (produkcyjno-magazynowe z zapleczem
                      socjalnym, sanitarnym i administracyjnym, budynki
                      magazynowe, w tym magazyny wysokiego składowania i
                      logistyczno-przeładunkowe)
                    </Paragraph>
                  </li>
                  <li
                    className={
                      "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                    }
                  >
                    <Paragraph><span className={'font-extrabold'}>komercyjnym</span> (handlowo-usługowe)</Paragraph>
                  </li>
                  <li
                    className={
                      "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                    }
                  >
                    <Paragraph>
                      <span className={'font-extrabold'}>użyteczności publicznej</span> (wystawiennicze)
                    </Paragraph>
                  </li>
                </ul>
                <Paragraph>
                  Osobną część naszego portfolio usług stanowią gotowe Obiekty
                  Systemowe. W dedykowanej zakładce znajduje się konfigurator
                  pozwalający na samodzielne dokonanie wyboru preferowanych
                  parametrów i zwizualizowanie planowanego obiektu.
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
        </div>
      </Container>
    </div>
  );
};
export default Content;
