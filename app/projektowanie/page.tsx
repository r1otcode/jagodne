'use client'
import Content from "@/components/layouts/projektowanie/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";
import {AnimatePresence, motion} from "framer-motion";

export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
  return (
    <>
        <DefaultHeader title={'Projektowanie'} description={'Nie boimy się odważnych i złożonych projektów zorientowanych na maksymalizację zwrotu z inwestycji. Budujemy dziś z myślą o potrzebach jutra.'}>
            Twój pomysł na<br/> inwestycję w skali
            <span className={"text-accent"}> big picture</span>
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
                    <CtaNormal />
                </motion.div>
            )}
        </AnimatePresence>

    </>
  );
}
