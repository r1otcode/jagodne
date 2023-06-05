import './globals.css'
import { AnimatePresence, motion } from "framer-motion";



function MyApp({ Component, pageProps, router  }) {


    return (
        <>

            <AnimatePresence initial={true}  mode="popLayout">
                <motion.div key={router.route}>
                <Component {...pageProps} key={router.asPath} />
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default MyApp