import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import ConsultationForm from "@components/Sections/Hero/ConsultationForm";

const BENEFITS = [
  "Free, no-obligation consultation",
  "Response within 24 hours",
  "Dedicated project manager assigned",
  "Transparent, fixed-price estimate",
];

export default function BookConsultation() {
  return (
    <>
      <Helmet><title>Book Consultation | Story Of Walls</title></Helmet>
      <PageHero
        title="Book A Free Consultation"
        subtitle="Tell us about your project and our experts will get in touch."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
        breadcrumb={[{ label: "Book Consultation" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="heading-md mb-6">What Happens Next?</h2>
            <ul className="space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FaCheck className="text-xs" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <ConsultationForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
