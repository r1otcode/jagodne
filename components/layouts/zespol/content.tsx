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
          <BiggerContainer right={false}>

            <BorderedContainer>
              <TextSpacer>
                <H3Title>
                  <span className={"text-accent font-black"}>Inwestorski</span> <span className={'font-medium'}> punkt
                  widzenia i </span>
                  <span className={"text-accent font-black"}>interdyscyplinarne </span>
                  <span className={'font-medium'}> umiejętności</span>
                </H3Title>
                <Paragraph>
                  Stawiamy na know-how i doświadczenie. Nasz zespół tworzy
                  uprawniona i doświadczona kadra zarządzająca, wspierana przez
                  wykwalifikowanych projektantów, spawaczy i montażystów o
                  właściwych specjalizacjach branżowych.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={true}>

            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  Doskonale rozumiemy dynamikę branży, w której działamy,
                  a zdywersyfikowane umiejętności i kompetencje pozwalają nam
                  kompleksowo obsługiwać nawet najbardziej wymagające
                  i skomplikowane inwestycje budowlane. Do działania napędzają
                  nas wyzwania, a dodatkowym paliwem są zadowoleni klienci.
                  Dbamy o jakość i innowacyjność oferowanych usług, a w biznesie
                  stawiamy na partnerskie relacje.
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
