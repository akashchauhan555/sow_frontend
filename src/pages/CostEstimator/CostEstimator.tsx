import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageHero from "@components/Common/PageHero";
import SectionHeading from "@components/Common/SectionHeading";
import TextInput from "@components/Common/Inputs/TextInput";
import SelectInput from "@components/Common/Inputs/SelectInput";
import Button from "@components/Common/Buttons/Button";
import { PACKAGES } from "@/data/packages";
import { CITIES } from "@/constants/site";
import { formatCurrencyINR } from "@/utils/formatters";

// Free instant cost estimator — pure frontend calculation using package pricing data.
export default function CostEstimator() {
  const [area, setArea] = useState<string>("1500");
  const [packageId, setPackageId] = useState(PACKAGES[1].id);
  const [city, setCity] = useState(CITIES[0]);
  const [result, setResult] = useState<number | null>(null);

  const selectedPackage = PACKAGES.find((p) => p.id === packageId) ?? PACKAGES[0];

  function handleCalculate() {
    const areaNum = Number(area) || 0;
    setResult(areaNum * selectedPackage.pricePerSqft);
  }

  return (
    <>
      <Helmet><title>Free Cost Estimator | Story Of Walls</title></Helmet>
      <PageHero
        title="Free Cost Estimator"
        subtitle="Get an instant, transparent construction cost estimate in minutes."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
        breadcrumb={[{ label: "Cost Estimator" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <SectionHeading eyebrow="Estimate Now" title="Calculate Your Construction Cost" />
          <div className="rounded-xl2 bg-cream border border-beige p-8 space-y-5">
            <TextInput
              label="Built-up Area (sqft)"
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.g. 1500"
            />
            <SelectInput
              label="Construction City"
              options={CITIES}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <SelectInput
              label="Package"
              options={PACKAGES.map((p) => p.name)}
              value={selectedPackage.name}
              onChange={(e) => {
                const pkg = PACKAGES.find((p) => p.name === e.target.value);
                if (pkg) setPackageId(pkg.id);
              }}
            />
            <Button className="w-full" onClick={handleCalculate}>Calculate Estimate</Button>

            {result !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl bg-primary/10 p-6 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-primary/70 mb-1">Estimated Cost In {city}</p>
                <p className="font-heading text-3xl font-bold text-primary">{formatCurrencyINR(result)}</p>
                <p className="text-xs text-charcoal/50 mt-2">
                  Based on {selectedPackage.name} package @ ₹{selectedPackage.pricePerSqft}/sqft. Final quote may vary based on site conditions.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
