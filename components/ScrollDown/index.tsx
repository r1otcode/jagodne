import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
import useStore from "@/context";
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
    // @ts-ignore
    const loading = useStore(store => store.loading)
    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <AnimatePresence
            initial={true}
            mode='wait'
        >
            {!loading && (
        <motion.div variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={'mx-auto w-full text-center absolute bottom-[20px]'}>
            <img src={'/assets/scroll_icon.svg'} className={'mx-auto'} onClick={handleClickScroll}/>

        </motion.div>
            )}
        </AnimatePresence>

    )
}

export default ScrollDown