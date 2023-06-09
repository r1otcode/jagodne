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
    </>
  );
}
