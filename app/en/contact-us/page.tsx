'use client'
import Content from "@/components/layouts/en/contact-us/content";
import DefaultHeader from "@/components/layouts/en/header/defaultHeader";
import CtaContact from "@/components/layouts/CtaContact";
import {AnimatePresence, motion} from "framer-motion";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";

export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
    return (
        <>
            <DefaultHeader title={'Contact us'} description={'Masz pytania lub potrzebujesz wyjaśnienia? Zadzwoń lub napisz do nas, posługując się danymi poniżej.'}>
            Get in touch with us.
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

                    >

                        <Content />
                        <CtaContact />
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}
