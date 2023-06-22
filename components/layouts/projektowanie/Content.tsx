import React from "react";
import classNames from "classnames";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph_light";
import SmallerContainer from "@/components/layouts/SmallerContainer";
import BiggerContainer from "@/components/layouts/BiggerContainer";
import TextSpacer from "@/components/layouts/TextSpacer";
import H3Title from "@/components/Typography/H3Title";

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
            {/*// @ts-ignore*/}
            <BorderedContainer>
              <img
                src={"/images/projektowanie_1.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent font-black"}>Więcej</span> <span className={"font-medium"}>niż projekt</span>
                </H3Title>
                <Paragraph>
                  Przed rozpoczęciem procesu projektowego staramy się uzyskać
                  jak najwięcej strategicznych informacji ze strony inwestora i
                  urzędu, tworząc parametry brzegowe zamierzenia budowlanego, na
                  podstawie których dokonujemy szczegółowej analizy w ujęciu
                  zarówno formalno-prawnym, techniczno-technologicznym, jak i
                  ekonomiczno-finansowym, oceniającej potencjał i ryzyka w
                  obrębie planowanej inwestycji.
                  <br /> <br />
                  Szereg autorskich działań przygotowawczych wypracowanych
                  praktyką pozwala nam precyzyjnie szacować koszty i skutecznie
                  wypełniać terminy.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={false}>
            {/*// @ts-ignore*/}
            <BorderedContainer>
              <img
                src={"/images/projektowanie_2.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent text-black"}>Wsparcie</span> <span className={"font-medium"}>na etapie
                  briefu</span>
                </H3Title>
                <Paragraph>
                  Doradzamy w optymalizacji parametrów pierwszo- i
                  drugorzędowych zamierzeń budowlanych, proponując dedykowane,
                  poparte doświadczeniem rozwiązania dla przedsięwzięć we
                  wczesnej fazie koncepcyjnej. Tworzymy wspólne ramy
                  kształtowania obiektu, zabezpieczając inwestycję przed
                  ryzykiem utraty kontroli nad budżetem. Niezależnie od skali i
                  struktury planowanego zamierzenia, nadrzędnie bierzemy pod
                  uwagę jego aspekt biznesowy i rekomendujemy rozwiązania z
                  potencjałem na jak największą zyskowność dla inwestora.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={true}>
            {/*// @ts-ignore*/}
            <BorderedContainer>
              <img
                src={"/images/projektowanie_3.png"}
                alt={"photo"}
                className={
                  "" +
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                <span className={"font-medium"}>Szeroka</span><span className={"text-accent text-black"}> perspektywa</span>
                </H3Title>
                <Paragraph>
                  W podejmowanych przedsięwzięciach uwzględniamy możliwe
                  kierunki modernizacji bądź rozbudowy na potrzeby przyszłych
                  inwestycji. Każdą współpracę poprzedzamy rozpoznaniem i
                  zaznajomieniem się z charakterystyką nieruchomości, na której
                  ma powstać obiekt. Zwrot z inwestycji klienta jest dla nas
                  równie ważny, jak jakość dostarczanych przez nas usług.{" "}
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={false}>
            {/*// @ts-ignore*/}
            <BorderedContainer>
              <img
                src={"/images/projektowanie_4.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                <span className={"font-medium"}>Kosztorysowanie{" "}</span>
                  <span className={"text-accent text-black"}> w czasie rzeczywistym</span>
                </H3Title>
                <Paragraph>
                  Zapewniamy elastyczny model współpracy, pozostawiając bufor na
                  nieprzewidziane, ale konieczne modyfikacje w trakcie
                  realizacji inwestycji. Kosztorys tworzony w trybie bieżącym
                  pozwala nam kształtować, modyfikować i śledzić wydatkowanie
                  środków przeznaczonych na przedsięwzięcie i pomaga efektywniej
                  zarządzać poszczególnymi fazami prac.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={true}>
            {/*// @ts-ignore*/}
            <BorderedContainer>
              <img
                src={"/images/1.png"}
                alt={"photo"}
                className={
                  "" +
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent text-black"}>Odpowiedzialność</span> <span className={"font-medium"}>za
                  proces koncepcyjny, projektowy i wykonawczy</span>
                </H3Title>
                <Paragraph>
                  Dysponujemy własną pracownią, w ramach której opracowujemy
                  dokumentacje oraz wprowadzamy ich modyfikacje i optymalizacje.
                  Zapewniamy wsparcie na każdym etapie procesu budowlanego,
                  w tym również w formie nadzoru autorskiego oraz w roli
                  inwestora zastępczego.{" "}
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>
        </div>
      </Container>
    </div>
  );
};
export default Content;
