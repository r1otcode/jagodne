import Content from "@/components/layouts/contact/Content";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";
import CtaContact from "@/components/layouts/CtaContact";
import {AnimatePresence, motion} from "framer-motion";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";

export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
    return (
        <>
            <DefaultHeader title={'Kontakt'} description={'Masz pytania lub potrzebujesz wyjaśnienia? Zadzwoń lub napisz do nas, posługując się danymi poniżej.'}>
                Masz pytania? Zapraszamy do kontaktu
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
                    </motion.div>
                )}
            </AnimatePresence>
            <CtaContact />
        </>
    );
}
