import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaChevronDown, FaBars, FaXmark, FaLocationDot } from "react-icons/fa6";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useAppContext } from "@/context/AppContext";
import { NAV_LINKS } from "@/constants/nav";
import { SITE, CITIES } from "@/constants/site";
import Button from "@components/Common/Buttons/Button";
import MegaMenu from "@components/layout/MegaMenu/MegaMenu";
import MobileMenu from "./MobileMenu";
import logo from "@assets/images/logo.jpeg";

// Sticky, glassmorphic navbar — transparent over the hero, solid on scroll.
export default function Navbar() {
  const scrolled = useScrollPosition(40);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const { selectedCity, setSelectedCity, openConsultation } = useAppContext();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent py-5" : "glass shadow-soft py-3"
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Story Of Walls" className="h-10 md:h-11 w-auto rounded" />
        </Link>

        {/* City Selector */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setCityOpen((v) => !v)}
            className={`flex items-center gap-1.5 text-sm font-medium ${transparent ? "text-white" : "text-charcoal"}`}
          >
            <FaLocationDot className="text-primary" />
            {selectedCity}
            <FaChevronDown className="text-xs" />
          </button>
          <AnimatePresence>
            {cityOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute top-full mt-2 w-44 rounded-xl bg-white shadow-card border border-beige py-2 z-50"
              >
                {CITIES.map((city) => (
                  <li key={city}>
                    <button
                      onClick={() => {
                        setSelectedCity(city);
                        setCityOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-cream"
                    >
                      {city}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.label === "More" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    transparent ? "text-white hover:text-primary-200" : "text-charcoal hover:text-primary"
                  }`}
                >
                  {link.label}
                  <FaChevronDown className={`text-xs transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                </button>
                <MegaMenu open={megaOpen} />
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  transparent ? "text-white hover:text-primary-200" : "text-charcoal hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${SITE.phone}`}
            className={`flex items-center gap-2 text-sm font-medium ${transparent ? "text-white" : "text-charcoal"}`}
          >
            <FaPhone className="text-primary" />
            {SITE.phone}
          </a>
          <Button size="sm" onClick={openConsultation}>
            Let's Build
          </Button>
        </div>

        <button
          className={`lg:hidden text-2xl ${transparent ? "text-white" : "text-charcoal"}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
