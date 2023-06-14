'use client'
import Content from "@/components/layouts/polityka-prywatności/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";
import {AnimatePresence, motion} from "framer-motion";
import useStore from "@/context";
import {dropIn} from "@/animationConfig";

export default function Home() {
    // @ts-ignore
    const loading = useStore((store) => store.loading);
    return (
        <>
          <DefaultHeader title={'jagodne.com'} description={'Jagodne Sp. z o.o. z siedzibą w Siedlcach'}>
              Polityka Prywatności i Cookies
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
