import ServiceCategoryTemplate from "@components/Sections/Services/ServiceCategoryTemplate";

export default function Interior() {
  return (
    <ServiceCategoryTemplate
      title="Interior Design"
      subtitle="Interiors That Tell Your Story"
      heroImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
      contentImage="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1000&q=80"
      intro="Our interior design team crafts personalised spaces that balance aesthetics with functionality — from modular kitchens to statement living rooms, designed around how you actually live."
      features={["3D Visualisation Before Execution", "Custom Modular Furniture", "Premium Finishes & Fittings", "Turnkey Delivery"]}
      projectCategory="Interior"
    />
  );
}
