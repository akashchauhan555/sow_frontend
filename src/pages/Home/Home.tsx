import { Helmet } from "react-helmet-async";
import Hero from "@components/Sections/Hero/Hero";
import TrustedNumbers from "@components/Sections/About/TrustedNumbers";
import WhyChooseUs from "@components/Sections/About/WhyChooseUs";
import ServicesSection from "@components/Sections/Services/ServicesSection";
import PackagesSection from "@components/Sections/Packages/PackagesSection";
import ProcessTimeline from "@components/Sections/About/ProcessTimeline";
import FeaturedProjects from "@components/Sections/Projects/FeaturedProjects";
import BeforeAfterSection from "@components/Sections/Projects/BeforeAfterSection";
import InteriorGallery from "@components/Sections/Projects/InteriorGallery";
import TestimonialsSection from "@components/Sections/Contact/TestimonialsSection";
import TechnologySection from "@components/Sections/About/TechnologySection";
import QualityPromise from "@components/Sections/About/QualityPromise";
import FAQSection from "@components/Sections/FAQ/FAQSection";
import BlogPreview from "@components/Sections/Blogs/BlogPreview";
import CTABanner from "@components/Sections/Contact/CTABanner";
import ContactSection from "@components/Sections/Contact/ContactSection";

// Home page — composes all 17 required sections in order.
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Story Of Walls | Every Space Has A Story</title>
        <meta
          name="description"
          content="Story Of Walls is a premium construction and interior design company delivering luxury homes, commercial spaces and renovations across India."
        />
      </Helmet>
      <Hero />
      <TrustedNumbers />
      <WhyChooseUs />
      <ServicesSection />
      <PackagesSection />
      <ProcessTimeline />
      <FeaturedProjects />
      <BeforeAfterSection />
      <InteriorGallery />
      <TestimonialsSection />
      <TechnologySection />
      <QualityPromise />
      <FAQSection />
      <BlogPreview />
      <CTABanner />
      <ContactSection />
    </>
  );
}
