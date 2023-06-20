import React from "react";
import classNames from "classnames";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";

const BorderedContainerInline = ({children, right}) => {

    const borderdContainerClasses = classNames('border-grid', 'border', 'flex',
        // 'xs:py-5 xs:px-[30px]',
        // 'sm:py-5 sm:px-[40px]',
        // 'md:py-[30px] md:px-[50px]',
        // 'lg:p-[50px]',
        // 'xl:p-[30px]',
        // '2xl:p-[30px]',
        // '3xl:p-[40px]',
        // '4xl:p-[60px]',
    'xs:w-full',
        'sm:w-full',
        'md:w-full',
        'lg:w-full',
        'xl:w-[57.2%]',
        '2xl:w-[57.2%]',
        '3xl:w-[57.2%]',
        '4xl:w-[57.2%]',

    right && 'xl:ml-[42.86%] 2xl:ml-[42.86%] 3xl:ml-[42.86%] 4xl:ml-[42.86%]'

        );
    return (
        <AnimatePresence>
        <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }} className={borderdContainerClasses}>

            {children}

        </motion.div>
        </AnimatePresence>
    );

}
export default BorderedContainerInline;