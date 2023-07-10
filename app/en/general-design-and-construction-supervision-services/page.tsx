'use client'
import Content from "@/components/layouts/en/general-design-and-construction-supervision-services/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/en/header/defaultHeader";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "@/context";
import { dropIn } from "@/animationConfig";

export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
    return (
        <>
            <DefaultHeader
                title={"General design and construction supervision services"}
                description={
                    "We transform ambitious visions into business opportunities. We secure construction projects against unforeseen circumstances and offer ready-made solutions for any ‘Plan B’ situations."
        }
      >
            Antifragile &amp; crisis-proof construction solutions
        </DefaultHeader >
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
