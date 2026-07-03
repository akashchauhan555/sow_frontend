import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { useAppContext } from "@/context/AppContext";
import ConsultationForm from "@components/Sections/Hero/ConsultationForm";

// Global modal version of the consultation form, triggered from Navbar "Let's Build" CTA.
export default function ConsultationModal() {
  const { isConsultationOpen, closeConsultation } = useAppContext();

  return (
    <AnimatePresence>
      {isConsultationOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeConsultation}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal/70 p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md"
          >
            <button
              onClick={closeConsultation}
              className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-white shadow-card flex items-center justify-center text-charcoal z-10"
              aria-label="Close"
            >
              <FaXmark />
            </button>
            <ConsultationForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
