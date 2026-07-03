import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

interface GalleryGridProps {
  images: string[];
  columns?: 2 | 3 | 4;
}

// Masonry-style interior/project gallery with lightbox preview.
export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [active, setActive] = useState<string | null>(null);

  const colClass = columns === 2 ? "sm:columns-2" : columns === 4 ? "sm:columns-4" : "sm:columns-3";

  return (
    <>
      <div className={`columns-1 ${colClass} gap-4 space-y-4`}>
        {images.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(src)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            className="block w-full overflow-hidden rounded-xl2 break-inside-avoid group"
          >
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-6"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-white text-2xl"
              aria-label="Close preview"
            >
              <FaXmark />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={active}
              alt="Preview"
              className="max-h-[85vh] max-w-full rounded-xl2 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
