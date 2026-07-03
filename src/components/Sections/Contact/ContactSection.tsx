import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import SectionHeading from "@components/Common/SectionHeading";
import TextInput from "@components/Common/Inputs/TextInput";
import TextArea from "@components/Common/Inputs/TextArea";
import Button from "@components/Common/Buttons/Button";
import { SITE } from "@/constants/site";
import type { ContactFormData } from "@/types";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  subject: z.string().min(2, "Enter a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

// Contact form + info section shown on the Home page and the dedicated Contact page.
export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 600));
    reset();
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading eyebrow="Get In Touch" title="Let's Talk About Your Project" />
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: FaPhone, label: "Call Us", value: SITE.phone },
              { icon: FaEnvelope, label: "Email Us", value: SITE.email },
              { icon: FaLocationDot, label: "Visit Us", value: SITE.address },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-xl2 bg-cream p-5 border border-beige">
                <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon />
                </div>
                <div>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide">{item.label}</p>
                  <p className="font-medium mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-xl2 bg-cream p-8 border border-beige space-y-4"
          >
            {isSubmitSuccessful && (
              <div className="rounded-xl bg-primary/10 text-primary p-4 text-sm font-medium text-center">
                Message sent! We'll get back to you soon.
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput placeholder="Full Name" {...register("name")} error={errors.name?.message} />
              <TextInput placeholder="Phone Number" {...register("phone")} error={errors.phone?.message} />
            </div>
            <TextInput placeholder="Email Address" {...register("email")} error={errors.email?.message} />
            <TextInput placeholder="Subject" {...register("subject")} error={errors.subject?.message} />
            <TextArea placeholder="Tell us about your project..." {...register("message")} error={errors.message?.message} />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
