import Content from "@/components/layouts/generalny/Content";
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
      <DefaultHeader
        title={"Generalny patronat projektowo-wykonawczy"}
        description={
          "Ambitne wizje przekształcamy w szanse biznesowe. Zabezpieczamy inwestycje na nieprzewidziane zmiany i oferujemy gotowe rozwiązania na wypadek planu B."
        }
      >
        Antykruche budownictwo odporne na kryzysy
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
      <CtaNormal />
    </>
  );
}
