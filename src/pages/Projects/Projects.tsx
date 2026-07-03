import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHero from "@components/Common/PageHero";
import ProjectCard from "@components/Common/ProjectCard/ProjectCard";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/utils/cn";

const CATEGORIES: Array<Project["category"] | "All"> = ["All", "Residential", "Commercial", "Interior", "Renovation", "Architecture"];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <Helmet><title>Our Projects | Story Of Walls</title></Helmet>
      <PageHero
        title="Our Projects"
        subtitle="Explore homes, interiors and commercial spaces we've brought to life."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80"
        breadcrumb={[{ label: "Our Projects" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium border transition-colors",
                  filter === cat ? "bg-primary text-white border-primary" : "bg-white text-charcoal border-beige-dark hover:border-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-charcoal/50 py-12">No projects found in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
