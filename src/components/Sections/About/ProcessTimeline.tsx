import SectionHeading from "@components/Common/SectionHeading";
import ProcessTimelineItem from "@components/Common/Timeline/ProcessTimelineItem";
import { PROCESS_TIMELINE } from "@/data/timeline";

// Six-step "How It Works" horizontal timeline section.
export default function ProcessTimeline() {
  return (
    <section id="process" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Process"
          title="From First Call To Handover"
          description="A structured, transparent journey designed to keep you informed at every milestone."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-2">
          {PROCESS_TIMELINE.map((step, i) => (
            <ProcessTimelineItem key={step.id} step={step} index={i} isLast={i === PROCESS_TIMELINE.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
