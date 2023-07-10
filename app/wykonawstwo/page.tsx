'use client'
import Content from "@/components/layouts/wykonawstwo/Content";
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
      <DefaultHeader title={'Wykonawstwo'} description={"Specjalizujemy się w nowoczesnym budownictwie wielkopowierzchniowym, odpornym na zmienność trendów i wyprzedzającym swoje czasy."}>
          Wielkopowierzchniowe budownictwo w formacie <span className="text-accent"> all-in-one</span>
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
