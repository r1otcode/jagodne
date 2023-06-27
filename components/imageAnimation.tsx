import {AnimatePresence, motion} from "framer-motion";


const ImageAnimation =({children}) => {
    return (
        <AnimatePresence>
            <div className={'inline-flex, overflow-hidden'}>
            <motion.div
                className={'inline-flex'}
                initial={{ x: 0 }}
                animate={{ x: '-200%' }}
                transition={{ duration: 60, delay: 2, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            >
                {children}
            </motion.div>
            </div>

        </AnimatePresence>
    )
}
export default ImageAnimation;