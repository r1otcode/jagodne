"use client";

import HomepageHeader from "@/components/layouts/en/header/homepage";
import HowWeDoIt from "@/components/layouts/en/homepage/howWeDoIt";
import Cta from "@/components/layouts/en/Cta";
import useStore from "@/context";
import {AnimatePresence, motion} from "framer-motion";
import {dropIn} from "../../animationConfig";




export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
  return (
    <>
      <HomepageHeader />
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

                > <HowWeDoIt />
                    <Cta />
                    </motion.div>
            )}
        </AnimatePresence>


    </>
  );
}
