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
import H2Title from "@/components/Typography/H2Title";
import H4TitleNoMG from "@/components/Typography/H4TitleNoMG";

const titleClasses = classNames('text-light font-light',
    'xs:text-[16px] leading-[26px] ',
    'sm:text-[16px] leading-[26px]',
    'md:text-[17px] leading-[26px]',
    'lg:text-[17px] leading-[21px]',
    'xl:text-[17px] leading-[21px]',
    '2xl:text-[17px] leading-[23px]',
    '3xl:text-[19px] leading-[28px]',
    '4xl:text-[23px] leading-[33px]',
)
const semiTitleClasses = classNames('text-light font-light',
    'xs:text-[16px] leading-[24px] ',
    'sm:text-[16px] leading-[24px]',
    'md:text-[17px] leading-[26px]',
    'lg:text-[17px] leading-[26px]',
    'xl:text-[17px] leading-[26px]',
    '2xl:text-[17px] leading-[26px]',
    '3xl:text-[19px] leading-[30px]',
    '4xl:text-[23px] leading-[30px]',
)
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
        <div className={"grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xL:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-2  text-center text-light"}>
          <BorderedContainer>
            <TextSpacer>
              <h3 className={titleClasses}>Chcesz porozmawiać – zadzwoń</h3>
              <br />
              <Paragraph>48 000 000 000</Paragraph>
              <br />
              <SmallButton link={"telTo:000"}>Połącz</SmallButton>
            </TextSpacer>
          </BorderedContainer>

          <BorderedContainer hideLeftBorder={true}>
            <TextSpacer>
              <h3 className={titleClasses}>Napisz do nas wiadomość e-mail</h3>
              <br />
              <Paragraph>biuro@jagodne.com</Paragraph>
              <br />
              <SmallButton link={"mailTo:biuro@jagodne.com"}>
                Napisz do nas
              </SmallButton>
            </TextSpacer>
          </BorderedContainer>
        </div>

        <div className={"text-center py-[80px]"}>
            <TextSpacer>
          <Paragraph>
            Biuro Obsługi Klienta pracuje od poniedziałku do piątku, w godzinach
            8.00-16.00.
          </Paragraph>
            </TextSpacer>
        </div>

        <div className={"grid xs:text-center sm:text-center md:text-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xL:grid-cols-4 3xl:grid-cols-4 4xl:grid-cols-4 text-light"}>
          <BorderedContainer>
            <TextSpacer>
              <h4 className={semiTitleClasses}>Siedziba główna</h4>
              <br />
              <Paragraph>
                Jagodne Sp. z o. o. <br />
                Brzeska 65, <br />
                08-110 Siedlce
              </Paragraph>
            </TextSpacer>
          </BorderedContainer>
          <BorderedContainer hideLeftBorder={true}>
            <TextSpacer>
              <h4 className={semiTitleClasses}>Biuro zarządu</h4>
              <br />
              <Paragraph>
                Świętojańska 13,
                <br />
                08-110 Siedlce
              </Paragraph>
            </TextSpacer>
          </BorderedContainer>

          <BorderedContainer hideLeftBorder={true}>
            <TextSpacer>
              <h4 className={semiTitleClasses}>Wytwórnia konstrukcji</h4>
              <br />
              <Paragraph>
                Karowa 38A,
                <br />
                08-110 Siedlce
              </Paragraph>
            </TextSpacer>
          </BorderedContainer>

          <BorderedContainer hideLeftBorder={true}>
            <TextSpacer>
              <h4 className={semiTitleClasses}>Plac składowy</h4>
              <br />
              <Paragraph>
                Jagodne,
                <br />
                08-130 Kotuń
              </Paragraph>
            </TextSpacer>
          </BorderedContainer>
        </div>
        <div className={"text-center"}>
          <BorderedContainer hideTopBorder={true}>
            <TextSpacer>
              <Paragraph>
                NIP: 8212662856 / REGON: 383076118 / KRS: 0000780630 / BDO:
                000440708
              </Paragraph>
            </TextSpacer>
          </BorderedContainer>
        </div>
      </Container>
    </div>
  );
};
export default Content;
