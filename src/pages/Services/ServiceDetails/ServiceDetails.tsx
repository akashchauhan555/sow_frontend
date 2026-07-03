import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import Button from "@components/Common/Buttons/Button";
import { SERVICES } from "@/data/services";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <Helmet><title>{service.title} | Story Of Walls</title></Helmet>
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        image={service.image}
        breadcrumb={[{ label: "Our Services", path: "/services" }, { label: service.title }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-8">
            <FaArrowLeft /> Back to Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="heading-md mb-5">Overview</h2>
              <p className="text-charcoal/60 leading-relaxed mb-8">{service.fullDescription}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium">
                    <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <FaCheck className="text-xs" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/book-consultation"><Button>Book Free Consultation</Button></Link>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src={service.image}
              alt={service.title}
              className="rounded-xl3 w-full object-cover aspect-square shadow-card"
            />
          </div>
        </div>
      </section>
    </>
  );
}
