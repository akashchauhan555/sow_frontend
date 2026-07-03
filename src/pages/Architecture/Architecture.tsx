import ServiceCategoryTemplate from "@components/Sections/Services/ServiceCategoryTemplate";

export default function Architecture() {
  return (
    <ServiceCategoryTemplate
      title="Architecture & Planning"
      subtitle="Thoughtful Design, Balanced With Light & Space"
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
      contentImage="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80"
      intro="Our in-house architects design floor plans optimised for natural light, ventilation and functional flow, tailored to your plot size, family needs and local building codes."
      features={["Custom Floor Plans", "3D Elevation Design", "Vastu Compliant Layouts", "Structural Engineering"]}
      projectCategory="Architecture"
    />
  );
}
