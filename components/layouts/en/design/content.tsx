import React from "react";
import classNames from "classnames";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph_light";
import SmallerContainer from "@/components/layouts/SmallerContainer";
import BiggerContainer from "@/components/layouts/BiggerContainer";
import TextSpacer from "@/components/layouts/TextSpacer";
import H3Title from "@/components/Typography/H3Title";
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
                        {/*// @ts-ignore*/}
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/projektowanie/photo_0014_1.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0013_1.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0012_1.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>More</span> <span className={"font-medium"}> than design</span>
                                </H3Title>
                                <Paragraph>
                                    Before starting the design process, we try to obtain as much crucial information as
                                    possible — from both the project owner and the relevant authority — to establish the
                                    boundary parameters of the project. We use this information to carry out a detailed
                                    formal-legal, technical-technological, and economic-financial analysis, considering the
                                    potential and risks of the project.
                                    <br /> <br />
                                    A range of proven original preparatory activities we
                                    always undertake lets us accurately determine all costs and meet deadlines.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/projektowanie/photo_0011_2.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0010_2.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0009_2.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>Support</span> <span className={"font-medium"}> at the briefing stage</span>
                                </H3Title>
                                <Paragraph>
                                    We offer expert advice when it comes to optimizing the parameters of primary and
                                    secondary construction projects by proposing dedicated, dependable solutions at an
                                    early conceptual stage. Together with the client, we set the framework for shaping their
                                    constructed facility, ensuring full control over the budget from start to end. Regardless of
                                    the scale and structure of the project, we take its business aspect into account above all
                                    else and come up with solutions that guarantee the highest possible profitability for the
                                    project owner.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </BiggerContainer>

                    <SmallerContainer right={true}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/projektowanie/photo_0008_3.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0007_3.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0006_3.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"font-medium"}>A broad</span><span className={"text-accent font-black"}> perspective</span>
                                </H3Title>
                                <Paragraph>
                                    We approach every project we undertake considering the possible paths of its future
                                    expansion or modernization. Before proceeding with any actual work, we analyze and
                                    explore the ins and outs of the target property chosen for the project to be constructed.
                                    The client’s return on investment is as important to us as the quality of the services we
                                    deliver.{" "}
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </SmallerContainer>

                    <BiggerContainer right={false}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/projektowanie/photo_0005_4.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0004_4.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0003_4.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>

                                    <span className={"text-accent font-black"}>Real-time </span>
                                    <span className={"font-medium"}>cost estimations{" "}</span>
                                </H3Title>
                                <Paragraph>
                                    Our flexible collaboration model enables us to calculate an emergency budget for
                                    unforeseen but necessary expenses that the project may involve as it progresses. Real-
                                    time cost estimates allow us to shape, modify, and track the expenses allocated to the
                                    project and help us manage the various phases of the work carried out more effectively.
                                </Paragraph>
                            </TextSpacer>
                        </BorderedContainer>
                    </BiggerContainer>

                    <SmallerContainer right={true}>
                        {/*// @ts-ignore*/}
                        <BorderedContainer>
                            <ImageAnimation>
                                <img
                                    src={"/images/projektowanie/photo_0002_5.1.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0001_5.2.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                                <img
                                    src={"/images/projektowanie/photo_0000_5.3.jpg"}
                                    alt={"photo"}
                                    className={
                                        "image_scroller w-full xs:h-[250px] sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[450px] 4xl:h-[560px]"
                                    }
                                />
                            </ImageAnimation>
                            <TextSpacer>
                                <H3Title>
                                    <span className={"text-accent font-black"}>Responsibility </span> <span className={"font-medium"}>for the concept, design, and execution</span>
                                </H3Title>
                                <Paragraph>
                                    We run our own design studio where we develop, modify, and optimize all the
                                    necessary design- and construction-related documents. We provide support at every
                                    stage of the construction process — including design supervision and project
                                    management services.
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
