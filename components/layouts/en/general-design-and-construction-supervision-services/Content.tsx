import React from "react";
import classNames from "classnames";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph";
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
                                    src={"/images/generalny/photo_0011_1.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/generalny/photo_0010_1.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/generalny/photo_0009_1.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"font-medium"}>
                                        We carry out projects aimed at </span>
                                    <span className={"text-accent font-black"}>
                                        maximizing profits
                                    </span>
                                </H3Title>
                                <Paragraph>
                                    We provide general contracting services, taking responsibility for the overall delivery of
                                    the construction projects we are involved in. We have the expertise and skills required
                                    to independently carry out construction projects big and small, including dealing with all
                                    relevant formal and legal matters as well as providing the necessary technical
                                    consulting.
                                    <br />
                                    <br />
                                    We take responsibility for all activities that enable the start of a construction
                                    project — from obtaining the necessary approvals to the execution of the contracted
                                    work.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/generalny/photo_0008_2.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/generalny/photo_0007_2.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/generalny/photo_0006_2.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"font-medium"}>A project owner’s mindset and a </span>

                                    <span className={"text-accent font-black"}>
                                        360° perspective
                                    </span>
                                </H3Title>
                                <Paragraph>
                                    When acting as a general contractor, we approach every new construction project
                                    holistically, thinking in terms of return on investment already at the briefing stage. We
                                    plan responsibly, always looking to come up with several business development
                                    opportunities within a single project.
                                    <br />
                                    <br />
                                    We identify risk factors and define the areas that
                                    have the potential to yield the highest possible profit, which safeguards the projects in
                                    case of unforeseen circumstances and makes it flexible enough to adapt to a new
                                    purpose if necessary.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </BiggerContainer>

                    <SmallerContainer right={true}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/generalny/photo_0005_3.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/generalny/photo_0004_3.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/generalny/photo_0003_3.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>
                                        Quality guaranteed.
                                    </span>
                                    <br />

                                    <span className={"font-medium"}>Deadlines met.</span>
                                </H3Title>
                                <Paragraph>
                                    We operate by following an all-in-one model, which enables us to set precise deadlines
                                    for the various phases of the construction process — and successfully meet those
                                    deadlines, regardless of the subcontracted parts of the project. It lets us provide
                                    services of the highest quality. As independent contractors, we’re fully able to act
                                    flexibly and adjust deadlines in the face of unexpected changes in the design or the
                                    execution part of a construction project.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/generalny/photo_0002_4.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/generalny/photo_0001_4.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/generalny/photo_0000_4.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    Enclosed structures are
                                    <span className={"text-accent font-black"}>
                                        {" "}
                                        our specialty
                                    </span>
                                </H3Title>
                                <Paragraph>
                                    We carry out projects involving the construction of multi-story industrial, commercial,
                                    and public utility buildings — including build to suit projects. We build the following types
                                    of structures: <br /> <br />
                                </Paragraph>
                                <ul className={"blue-marker"}>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph>
                                            <span className={'font-extrabold'}>industrial buildings</span> (production and warehouse buildings with social, sanitary,
                                            and administrative facilities, storage buildings – including high-bay warehouses
                                            and logistics and transshipment facilities)
                                        </Paragraph>
                                    </li>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph><span className={'font-extrabold'}>commercial buildings</span> (retail and shopping facilities)</Paragraph>
                                    </li>
                                    <li
                                        className={
                                            "xs:pb-[22px] sm:pb-[22px] md:pb-[22px] lg:pb-[22px] xl:pb-[22px] 2xl:pb-[22px] 3xl:pb-[32px] 4xl:pb-[32px]"
                                        }
                                    >
                                        <Paragraph>
                                            <span className={'font-extrabold'}>public utility buildings</span> (exhibition halls)
                                        </Paragraph>
                                    </li>
                                </ul>
                                <Paragraph>
                                    Ready-made Modular System Buildings are a separate part of our portfolio. Under a
                                    dedicated tab, you’ll find a configurator that will let you determine the preferred
                                    parameters and visualize the facility you want to have constructed.
                                </Paragraph>
                            </TextSpacer>
                            <div className={"border-t-grid border-t"}>
                                <TextSpacer>
                                    <Paragraph>
                                    Modular System Buildings — Learn more and use the configurator
                                    </Paragraph>
                                    <br />
                                    <SmallButton link={"/en/konfigurator-obiektow-systemowych"}>
                                        Open configurator
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
