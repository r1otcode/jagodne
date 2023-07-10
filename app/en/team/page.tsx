"use client";

import ZespolHeader from "@/components/layouts/header/zespol";
import Content from "@/components/layouts/en/team/content";
import TeamFlex from "@/components/layouts/en/team/teamFlex";
import CtaZespol from "@/components/layouts/CtaZespol";
import DefaultHeader from "@/components/layouts/en/header/defaultHeader";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";
import {AnimatePresence, motion} from "framer-motion";




export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
    return (
        <>
            <DefaultHeader title={'Team'} description={'We go where business goes. We plan with both today and tomorrow in mind. We transform visions into profit that sits on a solid foundation.'}>
            All competencies under one roof
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
