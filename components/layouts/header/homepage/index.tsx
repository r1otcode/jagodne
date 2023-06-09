"use client";
import Logo from "@/components/logo";
import classNames from "classnames";
import PageTitle from "@/components/Typography/pageTitleOutfit";
import Container from "@/components/layouts/container";
import Button from "@/components/Button";
import Menu from "@/components/menu";
import LangSwitcher from "@/components/LangSwitcher";
import ScrollDown from "@/components/ScrollDown";
import Paragraph from "@/components/Typography/Paragraph";
//@ts-ignore
import { Sierotki } from "sierotki";
//@ts-ignore
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import MenuLayout from "@/components/MenuLayout";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import useStore from "@/context";

const menuHeader = classNames(
  "flex",
  "justify-center",
  "items-center",
  "w-full"
  // "xs:p-5",
  // "sm:p-5",
  // "md:p-[30px]",
  // "lg:p-[30px]",
  // "xl:p-5",
  // "2xl:p-[30px]",
  // "3xl:p-[40px]",
  // "4xl:p-[40px]"
);
const mainHeader = classNames(
  "w-full",
  "h-[100vh]",
  // "xs:pt-[160px]",
  // "sm:pt-[227px]",
  // "md:pt-[225px]",
  // "lg:pt-[324px]",
  // "xl:pt-[187px]",
  // "2xl:pt-[221px]",
  // "3xl:pt-[270px]",
  // "4xl:pt-[341px]",

);

const buttonsContainer = classNames(
  "flex",
  "gap-[10px]",
  "xs:mt-[30px]",
  "sm:mt-[40px]",
  "md:mt-[40px]",
  "lg:mt-[50px]",
  "xl:mt-[40px]",
  "2xl:mt-[60px]",
  "3xl:mt-[70px]",
  "4xl:mt-[100px]"
);


const headerContentWrapper = classNames(
  "xs:block",
  "sm:block ",
  "md:block ",
  "lg:block ",
  "xl:flex",
  "2xl:flex",
  "3xl:flex",
  "4xl:flex"
);
const mainTitleWrapper = classNames(
  "border-[#505050] ",
  "xs:w-full",
  "sm:w-full",
  "md:w-full",
  "lg:w-full",
  "xl:w-[calc(14.285%*5)] xl:border-l xl:pl-[20px]",
  "2xl:w-[calc(14.285%*5)] 2xl:border-l 2xl:pl-[30px]",
  "3xl:w-[calc(14.285%*5)] 3xl:border-l 3xl:pl-[40px]",
  "4xl:w-[calc(14.285%*5)] 4xl:border-l 4xl:pl-[50px]"
);
const paragraphWrapper = classNames(
  "border-[#505050]",
  "xs:w-full xs:mt-[30px]",
  "sm:w-full sm:mt-[40px]",
  "md:w-full md:mt-[40px]",
  "lg:w-full lg:mt-[50px]",
    "xl:w-[calc(14.285%*2)] xl:border-l xl:pl-[20px]",
    "2xl:w-[calc(14.285%*2)] 2xl:border-l 2xl:pl-[30px]",
    "3xl:w-[calc(14.285%*2)] 3xl:border-l 3xl:pl-[40px]",
    "4xl:w-[calc(14.285%*2)] 4xl:border-l 4xl:pl-[50px]"
);

const dropIn = {
  hidden: {
    y: 200,
    opacity: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
      type: "easeOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.8,
      type: "easeOut",
    },
  },
  exit: {
    y: 200,
    opacity: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
      type: "easeOut",
    },
  },
};

const dropInn = {
  hidden: {
    x: "0vw",
    // rotate:0,
    transition: {
      delay: 0,
      duration: 2,
      type: "linear",
    },
  },
  visible: {
    x: `0`,
    // rotate: Math.random() * (360),
    transition: {
      delay: 0,
      duration: 1.5,
      type: "linear",
    },
  },
  exit: {
    x: "0vw",
    // rotate:0,
    transition: {
      delay: 0,
      duration: 1.5,
      type: "linear",
    },
  },
};

const HomepageHeader = () => {

  const [modalOpen, setModalOpen] = useState(false);
  // @ts-ignore
  const loading = useStore((store) => store.loading);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const menuButtonWrapper = classNames(
      "inline-flex",
      "items-center",
      "xs:top-[20px] xs:right-[20px]",
      "sm:top-[20px] sm:right-[20px]",
      "md:top-[20px] md:right-[20px] ",
      "lg:top-[30px] lg:right-[30px]",
      "xl:top-[30px] xl:right-[30px]",
      "2xl:top-[20px] 2xl:right-[20px]",
      "3xl:top-[30px] 3xl:right-[30px]",
      "4xl:top-[40px] 4xl:right-[40px]",
      "fixed",
      !modalOpen && "hover:z-[50]",
      modalOpen && "modal_opened"
  );
  const leftMenuWrapper = classNames(
      "inline-flex",
      "items-center",
      "xs:top-[41px] xs:left-[20px]",
      "sm:top-[34px] sm:left-[20px]",
      "md:top-[20px] md:left-[20px] ",
      "lg:top-[30px] lg:left-[30px]",
      "xl:top-[30px] xl:left-[30px]",
      "2xl:top-[20px] 2xl:left-[20px]",
      "3xl:top-[30px] 3xl:left-[30px]",
      "4xl:top-[40px] 4xl:left-[40px]",
      "fixed",
      !modalOpen && "hover:z-[50]",
      modalOpen && "modal_opened"

  );

  const circleContainerClasses = classNames('mx-auto', 'rotate nomix',

      'xs:w-[280px]',
      'sm:w-[350px]',
      'md:w-[400px]',
      'lg:w-[598px]',
      'xl:w-[568px]',
      '2xl:w-[758px]',
      '3xl:w-[840px]',
      '4xl:w-[1066px]',

  )
  return (
    <>
      <MenuLayout close={close} open={open} state={modalOpen} />
      <div className="relative">
        <div className={menuHeader}>
          <div className={leftMenuWrapper}>
            <LangSwitcher mobile={true} />
          </div>

          <Logo />

          <div className={menuButtonWrapper}>
            <LangSwitcher />

            <Menu close={close} open={open} state={modalOpen} />
          </div>
        </div>

        <div className={mainHeader}>

          <Container center={true}>
            <div className={"relative"}>
              <AnimatePresence
                initial={true}
                mode="wait"

              >
                {!loading && (
                  <>
                    <motion.div
                      variants={dropIn}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={headerContentWrapper}
                    >
                      <div className={mainTitleWrapper}>
                        <PageTitle>
                          Jagodne – satysfakcja <br/>
                          i sukces mierzone<br/> w m<sup>2</sup>.
                        </PageTitle>
                      </div>
                      <div className={paragraphWrapper}>
                        <Paragraph>
                          Specjalizujemy się w projektowaniu <br/> i wykonawstwie
                          nowoczesnych obiektów budowlanych dla sektora
                          komercyjnego, przemysłowego oraz użyteczności
                          publicznej.
                        </Paragraph>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={dropIn}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={buttonsContainer}
                    >
                      <Button href={"/projektowanie"}>Dowiedz się więcej</Button>
                      <Button href={"/zespol"} dark={true} mobileHide={true}>
                        Poznajmy się
                      </Button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

            </div>

          </Container>

          <AnimatePresence initial={true} mode="wait">
            {!loading && (
                <motion.div
                    variants={dropInn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="circle-bg"
                >
                  <div className="circle-bg__inner">


                    <img alt="circle homepage_circle" className={circleContainerClasses} src={"/assets/circle_full.svg"} />
                    {/*<div className={"circle-bg__inner__background"}></div>*/}
                  </div>
                </motion.div>
            )}
          </AnimatePresence>

          <ScrollDown />
        </div>
      </div>
    </>
  );
};

export default HomepageHeader