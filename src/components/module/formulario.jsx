"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from 'react';

const Form = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll'); // Não há scroll 
    return () => {
      document.body.classList.remove('no-scroll'); // Há scroll 
    };
  }, []);

  const formVariants = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 28,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="bg-[#00000057] translate-y-0 translate-x-0 fade flex items-center justify-center w-screen h-screen fixed inset-0 z-[2]"
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            key="unique-key"
            onClick={(e) => e.stopPropagation()}
            className="module-form w-[31vw] h-[72vh] bg-white"
            variants={formVariants}
          >
            {/* Seu conteúdo do formulário aqui */}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Form;