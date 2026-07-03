import { Helmet } from "react-helmet-async";
import PageHero from "@components/Common/PageHero";
import ContactSection from "@components/Sections/Contact/ContactSection";

export default function Contact() {
  return (
    <>
      <Helmet><title>Contact Us | Story Of Walls</title></Helmet>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear about your project."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        breadcrumb={[{ label: "Contact" }]}
      />
      <ContactSection />
      <section className="pb-20">
        <div className="container-custom">
          <iframe
            title="Story Of Walls Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            className="rounded-xl2 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </section>
    </>
  );
}
