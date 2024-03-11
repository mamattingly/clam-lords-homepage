import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Transition = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const pageVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    };

    const pageTransition = {
        duration: 1,
    };

    return (
        <AnimatePresence>
            {isMounted && (
                <motion.div
                    className="page-wrapper"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Transition;