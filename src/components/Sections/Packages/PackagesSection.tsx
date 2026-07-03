import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SectionHeading from "@components/Common/SectionHeading";
import Badge from "@components/Common/Badges/Badge";
import Button from "@components/Common/Buttons/Button";
import { PACKAGES } from "@/data/packages";
import { cn } from "@/utils/cn";

// Construction package pricing tiers with a highlighted "popular" plan.
export default function PackagesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Construction Packages"
          title="Choose A Package That Fits Your Vision"
          description="Transparent, fixed-price packages — no hidden costs, ever."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative rounded-xl2 p-8 flex flex-col shadow-soft border",
                pkg.popular ? "bg-charcoal text-white border-primary scale-[1.03] shadow-card" : "bg-white border-beige"
              )}
            >
              {pkg.popular && (
                <Badge variant="cta" className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
              )}
              <h3 className="font-heading text-2xl font-semibold mb-1">{pkg.name}</h3>
              <p className={cn("text-sm mb-6", pkg.popular ? "text-white/60" : "text-charcoal/60")}>{pkg.tagline}</p>
              <p className="mb-6">
                <span className="font-heading text-4xl font-bold">₹{pkg.pricePerSqft}</span>
                <span className={cn("text-sm", pkg.popular ? "text-white/60" : "text-charcoal/50")}>/sqft</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <FaCheck className={cn("mt-0.5 shrink-0", pkg.popular ? "text-primary-200" : "text-primary")} />
                    <span className={pkg.popular ? "text-white/80" : "text-charcoal/70"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/packages">
                <Button variant={pkg.popular ? "primary" : "outline"} className="w-full">
                  Choose {pkg.name}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
