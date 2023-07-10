'use client'
import Content from "@/components/layouts/en/modular-system-buildings/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/en/header/defaultHeader";
import {AnimatePresence, motion} from "framer-motion";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";

export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
  return (
    <>
      <DefaultHeader
        title={"Modular system buildings"}
        description={
          "Fast build speed, the possibility of further expansion, and excellent value for money combined translate into a quick return on investment."
        }
      >
          State-of-the-art modular facilities
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
