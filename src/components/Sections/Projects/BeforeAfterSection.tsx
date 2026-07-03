import SectionHeading from "@components/Common/SectionHeading";
import BeforeAfterSlider from "@components/Common/Gallery/BeforeAfterSlider";
import { PROJECTS } from "@/data/projects";

// "Before / After" drag-reveal comparison section using a renovation project.
export default function BeforeAfterSection() {
  const project = PROJECTS.find((p) => p.beforeImage && p.afterImage) ?? PROJECTS[0];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Transformations"
          title="See The Difference We Make"
          description="Drag the slider to reveal the transformation from concept to completion."
        />
        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider before={project.beforeImage!} after={project.afterImage!} />
          <p className="text-center text-sm text-charcoal/50 mt-4">{project.title} — {project.location}</p>
        </div>
      </div>
    </section>
  );
}
