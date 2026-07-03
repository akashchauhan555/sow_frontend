import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MEGA_MENU } from "@/constants/nav";
import { SITE } from "@/constants/site";

interface MegaMenuProps {
  open: boolean;
}

// Animated dropdown mega menu shown from the Navbar "More" trigger.
export default function MegaMenu({ open }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute left-1/2 top-full mt-3 w-[min(92vw,780px)] -translate-x-1/2 rounded-xl2 bg-white shadow-card border border-beige p-8 grid grid-cols-1 md:grid-cols-2 gap-8 z-50"
        >
          {MEGA_MENU.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="flex items-start justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-cream transition-colors group"
                    >
                      <span>
                        <span className="block text-sm font-medium text-charcoal group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="block text-xs text-charcoal/50 mt-0.5">{item.description}</span>
                        )}
                      </span>
                      {item.badge && (
                        <span className="shrink-0 rounded-full bg-cta text-white text-[10px] font-bold px-2 py-0.5 h-fit">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2 pt-4 border-t border-beige text-xs text-charcoal/50">
            Building Dream Homes Since {SITE.foundedYear}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
