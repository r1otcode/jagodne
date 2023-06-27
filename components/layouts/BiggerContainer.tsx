import classNames from "classnames";
import {AnimatePresence, motion} from "framer-motion";

const BiggerContainer = ({children, right}) => {
    const smallerContainerClasses = classNames('z',
        'xs:w-full',
        'sm:w-full',
        'md:w-full',
        'lg:w-full',
        'xl:w-[57.2%]',
        '2xl:w-[57.2%]',
        '3xl:w-[57.2%]',
        '4xl:w-[57.2%]',

        right && 'xl:ml-[42.6%] 2xl:ml-[42.8%] 3xl:ml-[42.8%] 4xl:ml-[42.8%]'

        );
    return (
        <AnimatePresence>


        <motion.div  initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }} className={smallerContainerClasses}>
            {children}
        </motion.div>
        </AnimatePresence>
    );
}
export default BiggerContainer;