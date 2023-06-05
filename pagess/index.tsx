

import HomepageHeader from "../components/layouts/header/homepage";
import HowWeDoIt from "../components/layouts/homepage/howWeDoIt";
import Cta from "../components/layouts/Cta";
import {AnimatePresence, motion} from "framer-motion";


const dropIn = {
    hidden: {
        y: 200,
        opacity: 0,
        transition: {
            delay:1.5,
            duration: 0.8,
            type: "easeOut",
        },

    },
    visible: {
        y: 500,
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

    }

};

export default function Home() {
    return (


        <>
            <AnimatePresence initial={true} mode='wait'>

                <motion.h1
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >Test</motion.h1>

                <HomepageHeader/>


                <HowWeDoIt/>


                <Cta/>
            </AnimatePresence>


        </>



    )
}
