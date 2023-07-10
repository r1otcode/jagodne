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
                <span className={'font-medium'}>A </span>
                  <span className={"text-accent font-black"}>project owner’s</span> <span className={'font-medium'}>point of view and </span>
                  <span className={"text-accent font-black"}>interdisciplinary </span>
                  <span className={'font-medium'}> skills</span>
                </H3Title>
                <Paragraph>
                Our strength lies in our know-how and experience. Our team consists of certified,
experienced management professionals, supported by qualified designers, welders, and
fitters with the necessary industry specialties and licenses.
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={true}>

            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                We have an excellent understanding of the dynamics of the industry in which we
operate, and our diverse skill set and expertise enable us to handle even the most
demanding and complex construction projects from start to finish. We are driven by a
combination of challenge and client satisfaction. We put high quality and innovation in
the services we provide first and strive to be a reliable business partner.
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
