import React, {useEffect, useRef} from "react";
import classNames from "classnames";
import H2Title from "@/components/Typography/H2Title";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph";
import SmallerContainer from "@/components/layouts/SmallerContainer";
import BiggerContainer from "@/components/layouts/BiggerContainer";
import TextSpacer from "@/components/layouts/TextSpacer";
import BorderedContainerInline from "@/components/layouts/BorderedContainerInline";
import H3Title from "@/components/Typography/H3Title";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const Content = () => {
    const howWedoItClasses = classNames(
        'xs:mt-[40px]',
        'sm:mt-[110px]',
        'md:mt-[120px]',
        'lg:mt-[120px]',
        'xl:mt-[120px]',
        '2xl:mt-[120px]',
        '3xl:mt-[120px]',
        '4xl:mt-[120px]'
    );
    const videoClasses = classNames(
        "border-grid",
        "border",
        "object-cover",
        "xs:mt-[120px] xs:h-[240px]",
        "sm:mt-[120px] sm:h-[260px]",
        "md:mt-[120px] md:h-[350px]",
        "lg:mt-[120px] lg:h-[350px]",
        "xl:mt-[120px] xl:h-[420px]",
        "2xl:mt-[140px] 2xl:h-[490px]",
        "3xl:mt-[140px] 3xl:h-[600px]",
        "4xl:mt-[160px] 4xl:h-[700px]"
    );



    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: false
    });
    const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.65 }
    };
    // useEffect(() => {
    //     console.log(scrollYProgress)
    // }, [scrollYProgress])
    return (
        <div className={howWedoItClasses} id={'section-1'}>
            <Container>
                <div className={'flex flex-col'}>

                   


                    <BiggerContainer right={false}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer>
                           
                            <TextSpacer>
                                <H3Title>
                                    <span className={'text-accent'}>Inwestorski</span> punkt widzenia i <span className={'text-accent'}>interdyscyplinarne</span> umiejętności
                                </H3Title>
                               <Paragraph>
                               Stawiamy na know-how i doświadczenie. Nasz zespół tworzy uprawniona i doświadczona kadra zarządzająca, wspierana przez wykwalifikowanych projektantów, spawaczy i montażystów o właściwych specjalizacjach branżowych.
                               </Paragraph>
                            </TextSpacer>

                        </BorderedContainer>
                    </BiggerContainer>

                    <SmallerContainer right={true}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer >
                           
                            <TextSpacer>
                               
                                <Paragraph>
                                Doskonale rozumiemy dynamikę branży, w której działamy, a zdywersyfikowane umiejętności i kompetencje pozwalają nam kompleksowo obsługiwać nawet najbardziej wymagające i skomplikowane inwestycje budowlane. Do działania napędzają nas wyzwania, a dodatkowym paliwem są zadowoleni klienci. Dbamy o jakość i innowacyjność oferowanych usług, a w biznesie stawiamy na partnerskie relacje.

                                    
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
