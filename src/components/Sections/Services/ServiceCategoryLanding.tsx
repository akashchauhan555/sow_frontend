import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import SectionHeading from "@components/Common/SectionHeading";
import ProjectCard from "@components/Common/ProjectCard/ProjectCard";
import Button from "@components/Common/Buttons/Button";
import CTABanner from "@components/Sections/Contact/CTABanner";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types";

interface ServiceCategoryLandingProps {
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  category: Project["category"];
}

// Shared landing-page layout reused by Commercial, Interior, Architecture & Renovation pages.
export default function ServiceCategoryLanding({
  title,
  subtitle,
  heroImage,
  intro,
  highlights,
  category,
}: ServiceCategoryLandingProps) {
  const projects = PROJECTS.filter((p) => p.category === category);

  return (
    <>
      <PageHero title={title} subtitle={subtitle} image={heroImage} breadcrumb={[{ label: title }]} />

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="heading-md mb-5">{title}, Done Right</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8">{intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-medium rounded-lg bg-cream px-4 py-3 border border-beige">
                  {h}
                </li>
              ))}
            </ul>
            <Link to="/book-consultation"><Button>Book Free Consultation</Button></Link>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            src={heroImage}
            alt={title}
            className="rounded-xl3 w-full object-cover aspect-square shadow-card"
          />
        </div>
      </section>

      {projects.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <SectionHeading eyebrow="Portfolio" title={`Recent ${title} Projects`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link to="/projects">
                <Button variant="outline" icon={<FaArrowRight />}>View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
