import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLocationDot, FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

// Featured project card with image reveal hover effect.
export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block overflow-hidden rounded-xl2 aspect-[4/5]"
      >
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
        <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-charcoal">
          {project.category}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-heading text-xl font-semibold mb-1">{project.title}</h3>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <FaLocationDot /> {project.location}
          </p>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            View Project <FaArrowUpRightFromSquare />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
