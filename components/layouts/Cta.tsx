import React from 'react'
import classNames from "classnames";
import H4Title from "@/components/Typography/H4Title";
import Container from "@/components/layouts/container";
import SmallButton from "@/components/SmallButton";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import H5Title from "@/components/Typography/H5Titile";
import TextSpacerCta from "@/components/layouts/TextSpacerCta";

const Cta = () => {
    const ctaClasses = classNames('mx-auto',
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
            <H4Title>Świadczymy kompleksową obsługę inwestycji budowlanych w ramach 3 obszarów specjalizacji</H4Title>

                <div className="xs:block sm:block md:block lg:block flex xs:text-center sm:text-center md:text-center lg:text-center text-left">
                    <BorderedContainer basis={true}>
                        <TextSpacerCta>
                            <H5Title>Projektowanie obiektów budowlanych</H5Title>
                            <SmallButton link={'#'}>Dowiedz się więcej</SmallButton>

                        </TextSpacerCta>

                    </BorderedContainer>

                    <BorderedContainer hideLeftBorder={true} basis={true}>
                        <TextSpacerCta>
                            <H5Title>Wykonawstwo konstrukcji budowlanych</H5Title>
                            <SmallButton link={'#'}>Dowiedz się więcej</SmallButton>

                        </TextSpacerCta>

                    </BorderedContainer>

                    <BorderedContainer hideLeftBorder={true} basis={true}>
                        <TextSpacerCta>
                            <H5Title>Generalny patronat projektowo-wykonawczy</H5Title>
                            <SmallButton link={'#'}>Dowiedz się więcej</SmallButton>

                        </TextSpacerCta>

                    </BorderedContainer>

                </div>

            </Container>
            </div>

    )
}
export default Cta