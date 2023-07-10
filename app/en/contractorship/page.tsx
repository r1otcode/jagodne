'use client'
import Content from "@/components/layouts/en/contractorship/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/en/header/defaultHeader";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";
import {AnimatePresence, motion} from "framer-motion";


export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
  return (
    <>
      <DefaultHeader title={'Contractorship'} description={"We specialize in modern large-scale construction undertakings resilient to fads and changing trends, designed to be future-proof, ahead of their time, and made to last."}>
           <span className="text-accent">All-in-one </span>large-scale construction projects
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
