import React from 'react'
import classNames from "classnames";
import H4Title from "@/components/Typography/H4Title";
import Container from "@/components/layouts/container";
import SmallButton from "@/components/SmallButton";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import H5Title from "@/components/Typography/H5Titile";
import TextSpacerCta from "@/components/layouts/TextSpacerCta";
import {AnimatePresence, motion} from "framer-motion";

const Cta = () => {
    const ctaClasses = classNames('mx-auto', 'nomix',
        'xs:py-[80px] xs:w-[174px]',
        'sm:py-[80px] sm:w-[174px]',
        'md:py-[120px] md:w-[210px]',
        'lg:py-[120px] lg:w-[256px]',
        'xl:py-[120px] xl:w-[342px]',
        '2xl:py-[140px] 2xl:w-[456px]',
        '3xl:py-[160px] 3xl:w-[512px]',
        '4xl:py-[180px] 4xl:w-[640px]'

        );

    return (
        <AnimatePresence>
        <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}  className={'text-center'}>


            <img src={'/assets/shape.svg'} className={ctaClasses} />

            <Container>
            <H4Title>We provide comprehensive construction projects services within 3 areas</H4Title>

                <div className="xs:block sm:block md:block lg:block flex xs:text-center sm:text-center md:text-center lg:text-center text-left">
                    <BorderedContainer basis={true}>
                        <TextSpacerCta>
                            <H5Title>Designing civil engineering structures</H5Title>
                            <SmallButton link={'/en/projektowanie'}>Let’s get to know each other</SmallButton>

                        </TextSpacerCta>

                    </BorderedContainer>

                    <BorderedContainer hideLeftBorder={true} basis={true}>
                        <TextSpacerCta>
                            <H5Title>Constructing civil engineering structures</H5Title>
                            <SmallButton link={'/en/wykonawstwo'}>Let’s get to know each other</SmallButton>

                        </TextSpacerCta>

                    </BorderedContainer>

                    <BorderedContainer hideLeftBorder={true} basis={true}>
                        <TextSpacerCta>
                            <H5Title>General design and construction supervision services</H5Title>
                            <SmallButton link={'/en/generalny-patronat-projektowo-wykonawczy'}>Let’s get to know each other</SmallButton>

                        </TextSpacerCta>

                    </BorderedContainer>

                </div>

            </Container>
            </motion.div>
        </AnimatePresence>

    )
}
export default Cta