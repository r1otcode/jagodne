"use client";
import React from "react";
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
import ImageAnimation from "@/components/imageAnimation";

const HowWeDoIt = () => {
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

        "object-cover",
        " xs:h-[240px]",
        " sm:h-[260px]",
        " md:h-[350px]",
        " lg:h-[350px]",
        " xl:h-[420px]",
        " 2xl:h-[490px]",
        " 3xl:h-[600px]",
        " 4xl:h-[700px]"
    );
    const videoWrapperClasses = classNames(

        "border border-grid",
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
        triggerOnce: true
    });
    const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 1, scale: 1.2 }
    };
    return (
        <div className={howWedoItClasses} id={'section-1'}>
            <Container>
                <div className="text-center" >
                    <H2Title>How we do it</H2Title>
                </div>
                <div className={videoWrapperClasses}>
                    <motion.div
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        exit="hidden"
                        transition={{ duration: 1 }}
                        className={'video-wrapper'}
                        ref={ref}


                    >
                        <video width="100%" className={videoClasses} autoPlay muted loop>
                            <source src="/assets/timelapse-1080_resized.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </div>

                <div className={'flex flex-col'}>
                    <SmallerContainer right={false}>

                        <BorderedContainer hideTopBorder={true}>
                            <TextSpacer>
                                <Paragraph>
                                    We skillfully combine form and function, creating unconventional and timeless
                                    architectural forms with synergistic functional systems resistant to market crises and
                                    ready to withstand economic pivots.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BorderedContainerInline right={true} hideTopBorder={true}>

                        <img
                            alt="jagodne"
                            src={"/assets/circle-small.svg"}
                            className={
                                " nomix border-grid border-r px-[45px] w-[170px] xs:hidden sm:hidden md:hidden lg:hidden"
                            }
                        />

                        <TextSpacer>
                            <Paragraph>
                                Our philosophy is the build-design formula, which
                                allows the demanding concepts we create take on a physical shape without any
                                compromises and enables us to provide multidimensional support under any
                                circumstances.
                            </Paragraph>
                        </TextSpacer>
                    </BorderedContainerInline>

                    <SmallerContainer>

                        <BorderedContainer>
                            <ImageAnimation>
                                <img src={'/images/strona_glowna/photo_0005_1.1.jpg'} alt={'photo'} className={'' +
                                    'image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'} />
                                <img src={'/images/strona_glowna/photo_0004_1.2.jpg'} alt={'photo'} className={'' +
                                    'image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'} />
                                <img src={'/images/strona_glowna/photo_0003_1.3.jpg'} alt={'photo'} className={'' +
                                    'image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'} />

                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title><span className={'text-accent'}>Premium</span> structures for standard and non-standard purposes
                                </H3Title>
                                <Paragraph>
                                    We undertake construction projects requiring an original, uncompromising approach
                                    and pioneering technical and technological solutions. <br /> <br />

                                    We act following the build-to-suit model, providing professional, experience-backed
                                    advice on the ways to optimize the parameters that matter most in terms of form,
                                    function, and profitability of each project, considering the perspective of both current
                                    capital expenditures and future operating costs.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>


                    <BiggerContainer right={true}>

                        <BorderedContainer>
                            <ImageAnimation>
                                <img src={'/images/strona_glowna/photo_0002_2.1.jpg'} alt={'photo'} className={'image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'} />
                                <img src={'/images/strona_glowna/photo_0001_2.2.jpg'} alt={'photo'} className={'image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'} />
                                <img src={'/images/strona_glowna/photo_0000_2.3.jpg'} alt={'photo'} className={'image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]'} />

                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>We offer innovative<br />
                                    <span className={'text-accent'}> know-how </span> — extensive enough to handle every scenario and help:
                                </H3Title>
                                <ul className={'blue-marker'}>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>property owners who have land, but don’t have a clear idea on how to use it and
                                        take business advantage of it</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>property owners with design documents</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>owners of facilities that need to be upgraded or expanded</Paragraph></li>
                                    <li className={'xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]'}><Paragraph>property buyers looking for pre-purchase support involving the identification of
                                        potential advantages and disadvantages of the considered property</Paragraph></li>


                                </ul>
                            </TextSpacer>

                        </BorderedContainer>
                    </BiggerContainer>
                </div>


            </Container>
        </div>
    );
};
export default HowWeDoIt;
