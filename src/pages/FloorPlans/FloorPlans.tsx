import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaDownload, FaExpand, FaBed, FaBath } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import SectionHeading from "@components/Common/SectionHeading";
import Button from "@components/Common/Buttons/Button";

const FLOOR_PLANS = [
  { id: "fp1", name: "The Aster", area: "1,200 sqft", beds: 2, baths: 2, image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
  { id: "fp2", name: "The Willow", area: "1,800 sqft", beds: 3, baths: 3, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80" },
  { id: "fp3", name: "The Magnolia", area: "2,600 sqft", beds: 4, baths: 4, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" },
  { id: "fp4", name: "The Cedar", area: "3,400 sqft", beds: 5, baths: 5, image: "https://images.unsplash.com/photo-1600566752229-450a5e701c9c?w=800&q=80" },
];

// Floor plan catalogue page — customisable pre-designed layouts.
export default function FloorPlans() {
  return (
    <>
      <Helmet><title>Floor Plans | Story Of Walls</title></Helmet>
      <PageHero
        title="Floor Plans"
        subtitle="Browse ready-made floor plans or ask us to customise one for your plot."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
        breadcrumb={[{ label: "Floor Plans" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading eyebrow="Catalogue" title="Popular Floor Plans" align="left" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {FLOOR_PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl2 bg-cream border border-beige overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={plan.image} alt={plan.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <button className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-soft text-primary">
                    <FaExpand className="text-sm" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
                    <span>{plan.area}</span>
                    <span className="flex items-center gap-1"><FaBed /> {plan.beds}</span>
                    <span className="flex items-center gap-1"><FaBath /> {plan.baths}</span>
                  </div>
                  <Button size="sm" variant="outline" icon={<FaDownload />}>Download Plan</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
