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
                src={"/images/obiekty_systemowe_1.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent text-black"}>Krótki</span>
                  <span className={"font-medium"}> czas realizacji </span>
                </H3Title>
                <Paragraph>
                  Obiekty Systemowe to alternatywa rozwiązań budowalnych,
                  powstających tradycyjnymi metodami z zastosowaniem wykończenia
                  wnętrz z wykorzystaniem technologii mokrych. Największe zalety
                  budynków powstających w trybie modułowym to krótki czas
                  realizacji, możliwość dalszej rozbudowy w przyszłości, a także
                  relatywnie niewysoki koszt przedsięwzięcia, który nie wymaga
                  poszukiwania kompromisu pomiędzy jakością a ceną.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={false}>
            <BorderedContainer>
              <img
                src={"/images/obiekty_systemowe_2.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent text-black"}>Przeznaczenie</span><br />
                  <span className={"font-medium"}> Obiektów Systemowych</span>
                </H3Title>
                <Paragraph>
                  Obiekty Systemowe sprawdzają się w roli nowoczesnych obiektów
                  produkcyjnych, magazynowych, handlowych, usługowych
                  i wystawienniczych. W ramach nich możliwe jest integrowanie
                  części socjalnych, sanitarnych i administracyjnych, a
                  założenia konstrukcyjne tego rodzaju obiektów pozwalają na
                  multiplikowanie kolejnych modułów, zgodnie z harmonogramem
                  rozwoju inwestycji lub przyszłymi decyzjami o rozbudowie.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={true}>
            <BorderedContainer>
              <img
                src={"/images/obiekty_systemowe_3.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent text-black"}>Premium</span>
                  <span className={"font-medium"}> w cenie <br />standard</span>
                </H3Title>
                <Paragraph>
                  Budynki modułowe wznosimy z gotowych elementów, co skraca czas
                  niezbędny na wykonanie budowy przeciętnie z dwunastu miesięcy
                  do trzech. W realizowanych inwestycjach systemowych
                  wykorzystujemy stalowe i żelbetowe prefabrykaty oraz materiały
                  wykończeniowe klasy premium. Optymalna kalkulacja zużycia
                  materiałów pozwala nam zachować bardzo dobrą relację jakości
                  do ceny.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={false}>
            <BorderedContainer>
              <img
                src={"/images/obiekty_systemowe_4.png"}
                alt={"photo"}
                className={
                  "w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                }
              />
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent text-black"}>Wysoki standard</span>
                  <span className={"font-medium"}> w standardzie</span>
                </H3Title>
                <Paragraph>
                  Realizujemy inwestycje budowlane wielokondygnacyjnych obiektów
                  przemysłowych, komercyjnych oraz użyteczności publicznej –
                  również w modelu build to suit. Wznosimy obiekty,
                  uwzględniając: <br /> <br />
                </Paragraph>
                <ul className={"blue-marker   grid-cols-2 grid xs:grid-cols-1 sm:grid-cols-1"}>
                  <li
                    className={
                      "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                    }
                  >
                    <Paragraph>
                      ponadczasowe wzornictwo
                    </Paragraph>
                  </li>
                  <li
                    className={
                      "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                    }
                  >
                    <Paragraph>
                      ergonomiczny układ funkcjonalny

                    </Paragraph>
                  </li>
                  <li
                    className={
                      "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                    }
                  >
                    <Paragraph>
                     wysokiej jakości materiały
                    </Paragraph>
                  </li>
                  <li
                      className={
                        "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                      }
                  >
                    <Paragraph>
                      wytrzymała i żywotna konstrukcja
                    </Paragraph>
                  </li>
                  <li
                      className={
                        "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                      }
                  >
                    <Paragraph>
                      nowoczesne, prefabrykowane rozwiązania
                    </Paragraph>
                  </li>
                  <li
                      className={
                        "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                      }
                  >
                    <Paragraph>
                      projekt w zgodzie z ideą zero waste
                    </Paragraph>
                  </li>
                </ul>

              </TextSpacer>
              <div className={"border-t-grid border-t"}>
                <TextSpacer>
                  <Paragraph>
                    W celu precyzyjnego oszacowania kosztów inwestycji,
                    zachęcamy do skorzystania z naszego Konfiguratora Obiektów
                    Systemowych:
                  </Paragraph>
                  <br />
                  <SmallButton link={"/konfigurator"}>
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
