import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import GalleryGrid from "@components/Common/Gallery/GalleryGrid";
import ProjectCard from "@components/Common/ProjectCard/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const related = PROJECTS.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <>
      <Helmet><title>{project.title} | Story Of Walls</title></Helmet>
      <PageHero
        title={project.title}
        subtitle={`${project.location} · ${project.area}`}
        image={project.coverImage}
        breadcrumb={[{ label: "Our Projects", path: "/projects" }, { label: project.title }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-8">
            <FaArrowLeft /> Back to Projects
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="heading-md mb-5">Project Overview</h2>
              <p className="text-charcoal/60 leading-relaxed mb-10">{project.description}</p>
              <GalleryGrid images={project.gallery} columns={2} />
            </motion.div>
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-fit rounded-xl2 bg-cream border border-beige p-6 space-y-4"
            >
              {[
                { label: "Category", value: project.category },
                { label: "Location", value: project.location },
                { label: "Built-up Area", value: project.area },
                { label: "Duration", value: project.duration },
                { label: "Budget", value: project.budget },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-sm border-b border-beige-dark/50 pb-3">
                  <span className="text-charcoal/50">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </motion.aside>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h3 className="heading-md mb-8">Related Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
