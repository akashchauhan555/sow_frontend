import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: { label: string; path?: string }[];
}

// Shared hero banner used across interior pages (About, Services, Projects, etc.).
export default function PageHero({ title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/20" />
      <div className="container-custom relative z-10 pb-12 text-white">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-xs text-white/70 mb-4">
            <Link to="/" className="hover:text-primary-200">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <FaChevronRight className="text-[10px]" />
                {b.path ? (
                  <Link to={b.path} className="hover:text-primary-200">{b.label}</Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="heading-lg"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 max-w-xl text-white/80"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
