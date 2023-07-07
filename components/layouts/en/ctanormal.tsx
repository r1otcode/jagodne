import React from 'react'
import classNames from "classnames";

import Container from "@/components/layouts/container";
import Paragraph from "@/components/Typography/Paragraph";
import H4TitleNoMG from "@/components/Typography/H4TitleNoMG";
import Button from "@/components/Button";
import ContactSpacer from '../ContactSpacer';

const CtaNormal = () => {
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
        <div className={'text-center'}>


            <img src={'/assets/shape.svg'} className={ctaClasses} />

            <Container>

                <H4TitleNoMG>Zapraszamy do kontaktu</H4TitleNoMG>
                <ContactSpacer>
                <Paragraph>Biuro Obsługi Klienta pracuje od poniedziałku do piątku, w godzinach 8.00-16.00.</Paragraph>
                </ContactSpacer>
                <Button href={'/en/kontakt'} center={true}>Let’s get to know each other</Button>



            </Container>
        </div>

    )
}
export default CtaNormal