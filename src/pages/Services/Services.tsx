import { Helmet } from "react-helmet-async";
import PageHero from "@components/Common/PageHero";
import ServiceCard from "@components/Common/Cards/ServiceCard";
import CTABanner from "@components/Sections/Contact/CTABanner";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <>
      <Helmet><title>Our Services | Story Of Walls</title></Helmet>
      <PageHero
        title="Our Services"
        subtitle="Complete construction and design solutions, delivered under one roof."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
        breadcrumb={[{ label: "Our Services" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
