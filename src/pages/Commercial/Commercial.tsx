import ServiceCategoryTemplate from "@components/Sections/Services/ServiceCategoryTemplate";

export default function Commercial() {
  return (
    <ServiceCategoryTemplate
      title="Commercial Construction"
      subtitle="Scalable Builds For Offices, Retail & Hospitality"
      heroImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
      contentImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=80"
      intro="We deliver commercial projects on time and on budget with rigorous quality control, covering offices, retail outlets, warehouses and hospitality properties across India."
      features={["Fast-Track Delivery", "Regulatory Compliance Handling", "Cost Optimisation", "Post-Handover Facility Management"]}
      projectCategory="Commercial"
    />
  );
}
