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

                    <SmallerContainer right={true}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer >
                            <img src={'/images/1.png'} alt={'photo'} className={'' +
                                'w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'}/>
                            <TextSpacer>
                                <H3Title>Budownictwo kubaturowe w standardzie
                                    <span className={'text-accent'}> premium</span></H3Title>
                                <Paragraph>
                                    Podejmujemy się zamierzeń budowlanych wymagających autorskiego podejścia, w tym pionierskich rozwiązań technicznych i technologicznych. <br/> <br/>

                                    Realizujemy zadania deweloperskie w modelu build-to-suit, doradzając w doborze optymalnych parametrów, mających kluczowy wpływ na ukształtowanie i zharmonizowanie zarówno formy, funkcji, jak i rentowności w perspektywie obecnych nakładów inwestycyjnych oraz przyszłych kosztów eksploatacyjnych.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>


                    <BiggerContainer right={false}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer>
                            <img src={'/images/2.png'} alt={'photo'} className={'w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'}/>
                            <TextSpacer>
                                <H3Title>Zapewniamy innowacyjny <br/>
                                    <span className={'text-accent'}> know-how</span>, dedykowany na każdy scenariusz
                                </H3Title>
                                <ul className={'blue-marker'}>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>Inwestorom dysponującym gruntem, lecz nieposiadającym ustrukturyzowanego pomysłu na przeznaczenie i komercjalizację inwestycji</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>Inwestorom posiadającym zaprojektowaną inwestycję</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>Inwestorom posiadającym nieruchomości wymagające modernizacji bądź rozbudowy</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>Inwestorom potrzebującym doradztwa przedzakupowego w obszarze identyfikacji potencjalnych zalet i wad nieruchomości</Paragraph></li>


                                </ul>
                            </TextSpacer>

                        </BorderedContainer>
                    </BiggerContainer>

                    <SmallerContainer right={true}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer >
                            <img src={'/images/1.png'} alt={'photo'} className={'' +
                                'w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'}/>
                            <TextSpacer>
                                <H3Title>Budownictwo kubaturowe w standardzie
                                    <span className={'text-accent'}> premium</span></H3Title>
                                <Paragraph>
                                    Podejmujemy się zamierzeń budowlanych wymagających autorskiego podejścia, w tym pionierskich rozwiązań technicznych i technologicznych. <br/> <br/>

                                    Realizujemy zadania deweloperskie w modelu build-to-suit, doradzając w doborze optymalnych parametrów, mających kluczowy wpływ na ukształtowanie i zharmonizowanie zarówno formy, funkcji, jak i rentowności w perspektywie obecnych nakładów inwestycyjnych oraz przyszłych kosztów eksploatacyjnych.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer>
                            <img src={'/images/2.png'} alt={'photo'} className={'w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'}/>
                            <TextSpacer>
                                <H3Title>Zapewniamy innowacyjny <br/>
                                    <span className={'text-accent'}> know-how</span>, dedykowany na każdy scenariusz
                                </H3Title>
                                <ul className={'blue-marker'}>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>Inwestorom dysponującym gruntem, lecz nieposiadającym ustrukturyzowanego pomysłu na przeznaczenie i komercjalizację inwestycji</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>Inwestorom posiadającym zaprojektowaną inwestycję</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>Inwestorom posiadającym nieruchomości wymagające modernizacji bądź rozbudowy</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>Inwestorom potrzebującym doradztwa przedzakupowego w obszarze identyfikacji potencjalnych zalet i wad nieruchomości</Paragraph></li>


                                </ul>
                            </TextSpacer>

                        </BorderedContainer>
                    </BiggerContainer>



                    <SmallerContainer right={true}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer >
                            <img src={'/images/1.png'} alt={'photo'} className={'' +
                                'w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'}/>
                            <TextSpacer>
                                <H3Title>Budownictwo kubaturowe w standardzie
                                    <span className={'text-accent'}> premium</span></H3Title>
                                <Paragraph>
                                    Podejmujemy się zamierzeń budowlanych wymagających autorskiego podejścia, w tym pionierskich rozwiązań technicznych i technologicznych. <br/> <br/>

                                    Realizujemy zadania deweloperskie w modelu build-to-suit, doradzając w doborze optymalnych parametrów, mających kluczowy wpływ na ukształtowanie i zharmonizowanie zarówno formy, funkcji, jak i rentowności w perspektywie obecnych nakładów inwestycyjnych oraz przyszłych kosztów eksploatacyjnych.
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