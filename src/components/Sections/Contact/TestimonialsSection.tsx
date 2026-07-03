import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "@components/Common/SectionHeading";
import TestimonialCard from "@components/Common/Testimonials/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

// Customer testimonials carousel powered by SwiperJS.
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved By Homeowners Across India"
          description="Real stories from families who trusted us with their dream spaces."
        />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id} className="h-auto pb-2">
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
