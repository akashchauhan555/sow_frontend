import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { NAV_LINKS, MEGA_MENU } from "@/constants/nav";
import { SITE } from "@/constants/site";
import Button from "@components/Common/Buttons/Button";
import { useAppContext } from "@/context/AppContext";
import logo from "@assets/images/logo.jpeg";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

// Full-screen slide-in mobile navigation drawer.
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { openConsultation } = useAppContext();
  const allItems = [...NAV_LINKS.filter((l) => l.label !== "More"), ...MEGA_MENU.flatMap((c) => c.items)];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col overflow-y-auto lg:hidden"
        >
          <div className="flex items-center justify-between p-5 border-b border-beige">
            <img src={logo} alt="Story Of Walls" className="h-9 w-auto rounded" />
            <button onClick={onClose} aria-label="Close menu" className="text-2xl text-charcoal">
              <FaXmark />
            </button>
          </div>
          <nav className="flex-1 p-6 space-y-1">
            {allItems.map((item: any) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={onClose}
                className="block py-3 text-lg font-medium text-charcoal border-b border-beige/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t border-beige space-y-3">
            <a href={`tel:${SITE.phone}`} className="block text-center text-sm font-medium text-primary">
              {SITE.phone}
            </a>
            <Button
              className="w-full"
              onClick={() => {
                onClose();
                openConsultation();
              }}
            >
              Book Free Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
