

import HomepageHeader from "../components/layouts/header/homepage";
import HowWeDoIt from "../components/layouts/homepage/howWeDoIt";
import Cta from "../components/layouts/Cta";
import {AnimatePresence} from "framer-motion";




export default function Home() {
    return (


        <>
            <AnimatePresence initial={true} mode='wait'>

            <HomepageHeader/>


            <HowWeDoIt/>


            <Cta/>
            </AnimatePresence>


        </>



    )
}
