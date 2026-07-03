import ServiceCategoryTemplate from "@components/Sections/Services/ServiceCategoryTemplate";

export default function Renovation() {
  return (
    <ServiceCategoryTemplate
      title="Renovation & Remodelling"
      subtitle="Breathe New Life Into Existing Spaces"
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1600&q=80"
      contentImage="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&q=80"
      intro="Whether it's a single room refresh or a full home remodel, our renovation team works around your schedule to minimise disruption while maximising transformation."
      features={["Structural Upgrades", "Smart Space Optimisation", "Minimal Disruption Scheduling", "Budget-Friendly Options"]}
      projectCategory="Renovation"
    />
  );
}
