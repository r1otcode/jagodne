import classNames from "classnames";
import {AnimatePresence, motion} from "framer-motion";
interface SmallerContainerInterface {
    children: React.ReactNode;
    right?: boolean;
}
const SmallerContainer = ({children, right} : SmallerContainerInterface) => {
    const smallerContainerClasses = classNames(
        'xs:w-full',
        'sm:w-full',
        'md:w-full',
        'lg:w-full',
        'xl:w-[42.86%]',
        '2xl:w-[42.86%]',
        '3xl:w-[42.86%]',
        '4xl:w-[42.86%]',
        right && 'xl:ml-[57.2%] 2xl:ml-[57.2%] 3xl:ml-[57.2%] 4xl:ml-[57.2%]'

        );
    return (
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={smallerContainerClasses}>
            {children}
        </motion.div>
        </AnimatePresence>
    );
}
export default SmallerContainer;