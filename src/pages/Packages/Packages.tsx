import { Helmet } from "react-helmet-async";
import PageHero from "@components/Common/PageHero";
import PackagesSection from "@components/Sections/Packages/PackagesSection";
import FAQSection from "@components/Sections/FAQ/FAQSection";

export default function Packages() {
  return (
    <>
      <Helmet><title>Construction Packages | Story Of Walls</title></Helmet>
      <PageHero
        title="Construction Packages"
        subtitle="Transparent, fixed-price packages for every budget."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
        breadcrumb={[{ label: "Packages" }]}
      />
      <PackagesSection />
      <FAQSection />
    </>
  );
}
