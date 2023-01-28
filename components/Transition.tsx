import { motion, AnimatePresence } from "framer-motion";

interface transitionProps {
  children: React.ReactNode;
}

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 20,
  },
};

const itemTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

export default function Transition({ children }: transitionProps, props: any) {
  return (
    <div className="effect-1">
      <AnimatePresence>
        <motion.div
          key={props.key}
          initial="initial"
          animate="in"
          exit="out"
          variants={itemVariants}
          transition={itemTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
