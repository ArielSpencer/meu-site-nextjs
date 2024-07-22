import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
}

const reverseIndex = (stairs) => {
  const totalSteps = 8;
  return totalSteps - stairs - 1;
}

const Stairs = () => {
  return (
    <>
      {[...Array(8)].map((_, stairs) => {
        return (
          <motion.div
            key={stairs}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(stairs) * 0.1,
            }}
            className="h-full w-full bg-[#232329] relative"
          />
        );
      })}
    </>
  )
}

export default Stairs;