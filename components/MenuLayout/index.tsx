import Mobile from "./Mobile";
import Desktop from "@/components/MenuLayout/Desktop";
import {AnimatePresence, motion} from "framer-motion";
import classNames from "classnames";


interface MenuLayoutProps {
    close?: () => void,
    open?: () => void,
    state: boolean


}
const dropIn = {
    hidden: {
        y: "100vh",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring",
        },

    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring",
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring",
        },

    }

};
const layoutClasses = classNames('fixed w-[100vw] h-[100vh] z-[100] top-0 left-0 bg-dark')
function Layout({close, open, state}: MenuLayoutProps)  {

return (
            <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={layoutClasses}
            >
                <div onClick={close}>ssssssssss</div>
                <Desktop />


                <Mobile />
            </motion.div>
        )

}

const MenuLayout = ({close, open, state}: MenuLayoutProps) => {


    return (
        <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={true}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            mode='wait'
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => console.log('sss')}

        >
            {state && <Layout close={close} open={open} state={state} />}

        </AnimatePresence>
    )
}

export default MenuLayout