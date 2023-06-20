import React, {useEffect, useState} from 'react'
import {motion, AnimatePresence} from "framer-motion";
import useStore from "@/context";
import {useRouter} from "next/navigation";
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
    const [isShown, setIsShown] = useState(false);

    // @ts-ignore
    const bears = useStore(store => store.loading)
    // @ts-ignore
    const setAnimation = useStore(state => state.setLoading)
    useEffect(() => {
        if (isShown) {
            document.body.classList.add("cursor-pointer");
        } else {
            document.body.classList.remove("cursor-pointer");
        }
    }, [isShown]);
    const router = useRouter();


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
                    className={'mx-auto w-full text-center absolute bottom-[20px]  '}>
            <img src={'/assets/scroll_icon.svg'} className={'mx-auto  hover:z-50  hover:relative'}  onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)} onClick={handleClickScroll}/>

        </motion.div>
            )}
        </AnimatePresence>

    )
}

export default ScrollDown