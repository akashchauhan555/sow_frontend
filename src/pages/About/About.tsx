import { Helmet } from "react-helmet-async";
import PageHero from "@components/Common/PageHero";
import WhyChooseUs from "@components/Sections/About/WhyChooseUs";
import ProcessTimeline from "@components/Sections/About/ProcessTimeline";
import TechnologySection from "@components/Sections/About/TechnologySection";
import TestimonialsSection from "@components/Sections/Contact/TestimonialsSection";
import CTABanner from "@components/Sections/Contact/CTABanner";
import { SITE } from "@/constants/site";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Helmet><title>About Us | Story Of Walls</title></Helmet>
      <PageHero
        title="Our Story"
        subtitle={`Building dream homes since ${SITE.foundedYear}, one relationship at a time.`}
        image="https://images.unsplash.com/photo-1541976590-713941681591?w=1600&q=80"
        breadcrumb={[{ label: "About Us" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80"
            alt="Story Of Walls team"
            className="rounded-xl3 w-full object-cover aspect-[4/3] shadow-card"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-md mb-5">Every Space Has A Story — This Is Ours</h2>
            <p className="text-charcoal/60 leading-relaxed mb-4">
              Story Of Walls began with a simple belief: construction should be an experience of trust,
              not stress. What started as a small team of engineers and designers in Bengaluru has grown
              into a multi-city construction and interior design company, delivering over a thousand
              homes across India.
            </p>
            <p className="text-charcoal/60 leading-relaxed">
              Today, our in-house architects, engineers and interior designers work as one team —
              guided by transparent pricing, dedicated project management and an obsession with quality
              that shows in every wall we build.
            </p>
          </motion.div>
        </div>
      </section>
      <WhyChooseUs />
      <ProcessTimeline />
      <TechnologySection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
