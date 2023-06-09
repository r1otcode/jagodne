import React from 'react'
import classNames from "classnames";

import Container from "@/components/layouts/container";
import Paragraph from "@/components/Typography/Paragraph";
import H4TitleNoMG from "@/components/Typography/H4TitleNoMG";
import Button from "@/components/Button";
import ContactSpacer from './ContactSpacer';

const CtaContact = () => {
    const ctaClasses = classNames('mx-auto',
        'xs:pt-[80px] xs:w-[174px]',
        'sm:pt-[80px] sm:w-[174px]',
        'md:pt-[120px] md:w-[210px]',
        'lg:pt-[120px] lg:w-[256px]',
        'xl:pt-[120px] xl:w-[342px]',
        '2xl:pt-[140px] 2xl:w-[456px]',
        '3xl:pt-[160px] 3xl:w-[512px]',
        '4xl:pt-[180px] 4xl:w-[640px]'

    );

    return (
        <div className={'text-center'}>


            <img src={'/assets/shape.svg'} className={ctaClasses} />


        </div>

    )
}
export default CtaContact