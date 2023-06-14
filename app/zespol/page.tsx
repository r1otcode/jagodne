"use client";

import ZespolHeader from "@/components/layouts/header/zespol";
import Content from "@/components/layouts/zespol/content";
import TeamFlex from "@/components/layouts/team/teamFlex";
import CtaZespol from "@/components/layouts/CtaZespol";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";
import {AnimatePresence, motion} from "framer-motion";




export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
    return (
        <>
            <DefaultHeader title={'Zespół'} description={'Patrzymy tam, gdzie patrzy biznes. Planujemy na dziś i jutro. Przekształcamy wizje w zysk, który stoi na solidnych fundamentach.'}>
                Wszystkie kompetencje pod jednym dachem
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
            <TeamFlex />
                    </motion.div>
                )}
            </AnimatePresence>
            <CtaZespol />
           
          </>
    );
}
