import Content from "@/components/layouts/obiekty/Content";
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
        title={"Obiekty systemowe"}
        description={
          "Krótki czas realizacji, możliwość dalszej rozbudowy i doskonała relacja ceny do jakości, pozwalająca na szybki zwrot z inwestycji."
        }
      >
          Nowoczesne obiekty w systemie modułowym
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
