import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaWhatsapp } from "react-icons/fa6";
import TextInput from "@components/Common/Inputs/TextInput";
import SelectInput from "@components/Common/Inputs/SelectInput";
import Button from "@components/Common/Buttons/Button";
import { CITIES } from "@/constants/site";
import { submitConsultation } from "@/services/consultationService";
import type { ConsultationFormData } from "@/types";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  city: z.string().min(1, "Select a city"),
});

// Floating luxury "Talk to Our Expert" consultation form shown in the Hero.
export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(schema),
    defaultValues: { city: CITIES[0] },
  });

  async function onSubmit(data: ConsultationFormData) {
    await submitConsultation(data);
    reset();
  }

  return (
    <div className="relative rounded-xl3 bg-white/95 backdrop-blur p-7 shadow-card">
      <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-cta text-white flex items-center justify-center shadow-card">
        <FaWhatsapp className="text-xl" />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-1">Talk to Our Expert</h3>
      <p className="text-sm text-charcoal/50 mb-6">Get a free consultation within 24 hours.</p>

      {isSubmitSuccessful ? (
        <div className="rounded-xl bg-primary/10 text-primary p-4 text-sm font-medium text-center">
          Thank you! Our team will reach out to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextInput placeholder="Your Full Name" {...register("name")} error={errors.name?.message} />
          <TextInput placeholder="+91 Phone Number" {...register("phone")} error={errors.phone?.message} />
          <SelectInput options={CITIES} {...register("city")} error={errors.city?.message} />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Book Free Consultation"}
          </Button>
          <p className="text-[11px] text-charcoal/40 text-center">
            By submitting, you agree to our privacy policy allowing us to use this information.
          </p>
        </form>
      )}
    </div>
  );
}
