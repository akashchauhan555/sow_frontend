import SectionHeading from "@components/Common/SectionHeading";
import ServiceCard from "@components/Common/Cards/ServiceCard";
import { SERVICES } from "@/data/services";

// Luxury services grid section for the Home page.
export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Construction & Design Services"
          description="From architecture to handover, we manage every stage of your project under one roof."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
