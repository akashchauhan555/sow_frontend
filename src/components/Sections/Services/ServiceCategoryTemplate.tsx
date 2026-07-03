import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import SectionHeading from "@components/Common/SectionHeading";
import ProjectCard from "@components/Common/ProjectCard/ProjectCard";
import Button from "@components/Common/Buttons/Button";
import CTABanner from "@components/Sections/Contact/CTABanner";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types";

interface ServiceCategoryTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  contentImage: string;
  intro: string;
  features: string[];
  projectCategory: Project["category"];
}

// Shared template used by Commercial, Interior, Architecture and Renovation pages,
// which all follow the same "category landing page" pattern.
export default function ServiceCategoryTemplate({
  title,
  subtitle,
  heroImage,
  contentImage,
  intro,
  features,
  projectCategory,
}: ServiceCategoryTemplateProps) {
  const relatedProjects = PROJECTS.filter((p) => p.category === projectCategory).slice(0, 3);

  return (
    <>
      <Helmet><title>{title} | Story Of Walls</title></Helmet>
      <PageHero title={title} subtitle={subtitle} image={heroImage} breadcrumb={[{ label: title }]} />

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src={contentImage}
            alt={title}
            className="rounded-xl3 w-full object-cover aspect-[4/3] shadow-card"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-md mb-5">{subtitle}</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8">{intro}</p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FaCheck className="text-xs" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/book-consultation"><Button>Book Free Consultation</Button></Link>
          </motion.div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <SectionHeading eyebrow="Our Work" title={`${title} Projects`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CTABanner />
    </>
  );
}
