'use client'
import Content from "@/components/layouts/en/design/content";
import CtaNormal from "@/components/layouts/en/ctanormal";
import DefaultHeader from "@/components/layouts/en/header/defaultHeader";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";
import {AnimatePresence, motion} from "framer-motion";

export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
  return (
    <>
        <DefaultHeader title={'Design'} description={'We’re not afraid of daring and complex projects aiming to maximize return on investment. We build today with tomorrow’s needs in mind.'}>
        Your project idea<br/> in the
            <span className={"text-accent"}> big picture </span>
             perspective
        </DefaultHeader>

        <AnimatePresence
            initial={true}
            mode="wait"
            onExitComplete={() => useStore.setState({ loading: false })}
        >
            {!loading && (
                <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={' bg-dark'}
                >

                    <Content />
                    <CtaNormal />
                </motion.div>
            )}
        </AnimatePresence>

    </>
  );
}
