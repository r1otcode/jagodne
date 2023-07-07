import React from "react";
import classNames from "classnames";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph_light";
import SmallerContainer from "@/components/layouts/SmallerContainer";
import BiggerContainer from "@/components/layouts/BiggerContainer";
import TextSpacer from "@/components/layouts/TextSpacer";
import H3Title from "@/components/Typography/H3Title";
import SmallButton from "@/components/SmallButton";
import ImageAnimation from "@/components/imageAnimation";

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
                    <SmallerContainer right={true}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/obiekty_systemowe/photo_0011_1.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/obiekty_systemowe/photo_0010_1.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/obiekty_systemowe/photo_0009_1.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>Krótki</span>
                                    <span className={"font-medium"}> czas realizacji </span>
                                </H3Title>
                                <Paragraph>
                                    Modular System Buildings are an alternative to traditional construction solutions
                                    involving the use of thermal insulation composite systems. The biggest advantages of
                                    modular buildings are the fast build speed, the possibility of their further expansion in
                                    the future, and the relatively low cost of the project, which does not require a
                                    compromise between quality and price.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/obiekty_systemowe/photo_0008_2.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/obiekty_systemowe/photo_0007_2.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/obiekty_systemowe/photo_0006_2.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>The purposes </span><br />
                                    <span className={"font-medium"}>of Modular System Buildings</span>
                                </H3Title>
                                <Paragraph>
                                    Modular System Buildings work perfectly as modern manufacturing, warehouse, retail,
                                    service, and exhibition facilities. They make it possible to combine social, sanitary, and
                                    administrative zones, and their design enables the integration of additional modules
                                    according to the project schedule or future expansion decisions.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </BiggerContainer>

                    <SmallerContainer right={true}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/obiekty_systemowe/photo_0005_3.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/obiekty_systemowe/photo_0004_3.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/obiekty_systemowe/photo_0003_3.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>Premium Quality</span>
                                    <span className={"font-medium"}> at a <br />Standard Price</span>
                                </H3Title>
                                <Paragraph>
                                    We construct modular buildings using ready components, which reduces the time
                                    required to complete the process from twelve to three months on average. We use steel
                                    and reinforced concrete precast units and premium finishing materials in the modular
                                    system buildings we erect. The ability to precisely calculate and determine material
                                    consumption enables us to offer excellent value for money.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/obiekty_systemowe/photo_0002_4.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/obiekty_systemowe/photo_0001_4.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/obiekty_systemowe/photo_0000_4.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>Premium </span>
                                    <span className={"font-medium"}>as standard</span>
                                </H3Title>
                                <Paragraph>
                                    Realizujemy inwestycje budowlane wielokondygnacyjnych obiektów
                                    przemysłowych, komercyjnych oraz użyteczności publicznej –
                                    również w modelu build to suit. Wznosimy obiekty,
                                    uwzględniając: <br /> <br />
                                </Paragraph>
                                <ul className={"blue-marker   grid-cols-2 grid xs:grid-cols-1 sm:grid-cols-1"}>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph>
                                            Timeless design
                                        </Paragraph>
                                    </li>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph>
                                            Ergonomic functional layouts

                                        </Paragraph>
                                    </li>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph>
                                            High-quality materials
                                        </Paragraph>
                                    </li>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph>
                                            Durable and lasting design
                                        </Paragraph>
                                    </li>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph>
                                            Modern precast solutions
                                        </Paragraph>
                                    </li>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph>
                                            The ‘zero waste’ idea put into practice
                                        </Paragraph>
                                    </li>
                                </ul>

                            </TextSpacer>
                            <div className={"border-t-grid border-t"}>
                                <TextSpacer>
                                    <Paragraph>
                                        Modular System Buildings — Learn more and use the configurator
                                    </Paragraph>
                                    <br />
                                    <SmallButton link={"/en/konfigurator"}>
                                        Open Configurator
                                    </SmallButton>
                                </TextSpacer>
                            </div>
                        </BorderedContainer>
                    </BiggerContainer>
                </div>
            </Container>
        </div>
    );
};
export default Content;
