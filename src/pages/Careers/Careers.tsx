import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaLocationDot, FaBriefcase } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import SectionHeading from "@components/Common/SectionHeading";
import Button from "@components/Common/Buttons/Button";
import { JOB_OPENINGS } from "@/data/careers";

export default function Careers() {
  return (
    <>
      <Helmet><title>Careers | Story Of Walls</title></Helmet>
      <PageHero
        title="Careers"
        subtitle="Join a team that's redefining how India builds homes."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
        breadcrumb={[{ label: "Careers" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading eyebrow="Open Positions" title="Current Openings" align="left" />
          <div className="space-y-4">
            {JOB_OPENINGS.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl2 bg-cream border border-beige p-6"
              >
                <div>
                  <h3 className="font-heading font-semibold text-lg">{job.title}</h3>
                  <p className="text-sm text-charcoal/60 mt-1 max-w-lg">{job.description}</p>
                  <div className="flex items-center gap-4 text-xs text-charcoal/50 mt-3">
                    <span className="flex items-center gap-1.5"><FaBriefcase /> {job.department}</span>
                    <span className="flex items-center gap-1.5"><FaLocationDot /> {job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="shrink-0">Apply Now</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
