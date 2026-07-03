import { Link } from "react-router-dom";
import SectionHeading from "@components/Common/SectionHeading";
import ProjectCard from "@components/Common/ProjectCard/ProjectCard";
import Button from "@components/Common/Buttons/Button";
import { PROJECTS } from "@/data/projects";
import { FaArrowRight } from "react-icons/fa6";

// Featured projects grid shown on the Home page.
export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          description="A glimpse into the spaces we've had the privilege to build."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 6).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/projects">
            <Button variant="outline" icon={<FaArrowRight />}>View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
