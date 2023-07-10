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
import Carousel from "../../wykonawstwo/lightBox";
import ImageAnimation from "@/components/imageAnimation";
const slides = [
    { src: "/images/wykonawstwo/certyfikaty/PL/Spawalnicze_Swiadectwo_Kawalifikacji_Jagodne_PL.png", width: 1200, height: 600 },
    { src: "/images/wizualizacja_2.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_3.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_4.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
    { src: "/images/wizualizacja_5.png", width: 800, height: 600 },
];
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
                                    src={"/images/wykonawstwo/photo_0011_1.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/wykonawstwo/photo_0010_1.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/wykonawstwo/photo_0009_1.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>Responsibility </span>
                                    <span className={"font-medium"}>
                                        for all phases of the project
                                    </span>
                                </H3Title>
                                <Paragraph>
                                    Our unique business model lets us provide an extensive range of services for all kinds
                                    of investment projects, from design and obtaining building permits to construction and
                                    obtaining certificates of occupancy. This is something project owners who require end-
                                    to-end customer service to save time on handling formalities and searching for
                                    individual trade contractors value greatly.
                                    <br />
                                    <br />
                                    We skillfully combine form and function,
                                    aesthetics and practicality. Our design efforts aim to foresee and take the possible
                                    scenarios for the current and future use of the facility designed into account in case of a
                                    change in business orientation.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/wykonawstwo/photo_0008_2.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/wykonawstwo/photo_0007_2.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/wykonawstwo/photo_0006_2.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>
                                        Technological and manufacturing resources
                                    </span>{" "}
                                    <span className={"font-medium"}>
                                        ready to handle the
                                        most demanding construction projects
                                    </span>
                                </H3Title>
                                <Paragraph>
                                    We have our own manufacturing plant, which produces more than a hundred tons of
                                    steel structures for our clients each month. We manufacture precast units and deliver
                                    finished elements to the construction site, erecting buildings according to design
                                    specifications.
                                    <br />
                                    <br />
                                    We specialize in precast modular construction, which involves manufacturing and
                                    constructing Modular System Buildings formed of framed partition systems. Compared
                                    to traditional solutions, this technology reduces the construction time by half.
                                </Paragraph>
                            </TextSpacer>
                            <div className={"border-t-grid border-t"}>
                                <TextSpacer>
                                    <Paragraph>
                                        Modular System Buildings — Learn more and use the configurator
                                    </Paragraph>
                                    <br />
                                    <SmallButton link={"/en/modular-system-building-configurator"}>
                                        Open configurator
                                    </SmallButton>
                                </TextSpacer>
                            </div>
                        </BorderedContainer>
                    </BiggerContainer>

                    <SmallerContainer right={true}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/wykonawstwo/photo_0005_3.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/wykonawstwo/photo_0004_3.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/wykonawstwo/photo_0003_3.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"font-medium"}>
                                        We use technology that helps us turn a vision into reality
                                    </span>
                                    <span className={"text-accent font-black"}> ahead of its time
                                    </span>
                                </H3Title>
                                <Paragraph>
                                    At the construction stage, we reach for modern technological solutions that enable us to
                                    minimize the risk of errors in the construction process and monitor the construction
                                    parameters of the constructed facility once it’s put into use. We work with partners
                                    specializing in AI-based technologies applied in the operational layer of manufacturing
                                    and warehousing projects.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/wykonawstwo/photo_0002_4.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/wykonawstwo/photo_0001_4.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/wykonawstwo/photo_0000_4.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"font-medium"}>We provide project support at the </span>
                                    <span className={"text-accent font-black"}>
                                        pre-construction stage
                                    </span>
                                </H3Title>
                                <Paragraph>
                                    We manufacture precast steel structures and deliver them to the construction site.
                                    When applying different manufacturing methods, we go for those that optimize the
                                    consumption of raw materials and time-consuming labor — and minimize production
                                    costs and the impact on the natural environment. We act responsibly and efficiently,

                                    always making sure that the assembly and delivery of precast units are up to the
                                    highest quality standard and that each stage of work is completed on time.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </BiggerContainer>

                    <SmallerContainer right={true}>
                        <BorderedContainer>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>Certified</span>
                                    <span className={"font-medium"}> solutions</span>
                                </H3Title>
                                <Paragraph>
                                    The components that we manufacture in our facility meet the requirements of stringent
                                    European standards such as EN ISO 3834-2, EN 1090-2, classes EXC1-EXC3 and EN 1090-1,
                                    and bear a CE marking – ZA.3.2 and ZA.3.4, verified periodically by professional industry
                                    auditors from independent certification bodies.
                                    <br /> <br />
                                    The construction elements we supply are
                                    corrosion-treated, fire-protected, hot-dip galvanized, and hydrodynamically paint-coated, up to
                                    corrosion protection classes C1-C5-M and fire resistance classes R15-R240.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                        <BorderedContainer>
                            <Carousel slides={slides} />
                        </BorderedContainer>
                    </SmallerContainer>
                </div>
            </Container>
        </div>
    );
};
export default Content;
