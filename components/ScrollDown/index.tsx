import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
const dropIn = {
    hidden: {
        y: 200,
        opacity: 0,
        transition: {
            delay:1,
            duration: 0.8,
            type: "easeOut",
        },

    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.8,
            type: "easeOut",
        },
    },
    exit: {
        y: 200,
        opacity: 0,
        transition: {
            delay: 0.3,
            duration: 0.8,
            type: "easeOut",
        },

    }

};
const ScrollDown = () => {
    return (
        <AnimatePresence
            initial={true}
            mode='wait'
        >

        <motion.div variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={'mx-auto w-full text-center absolute bottom-[20px]'}>
            <img src={'/assets/scroll_icon.svg'} className={'mx-auto'}/>

        </motion.div>
        </AnimatePresence>

    )
}

export default ScrollDown